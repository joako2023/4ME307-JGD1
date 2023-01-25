import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { dias } from './constants';
import { dates } from './entities/dates.entity';

@Injectable()
export class DatesService {
  constructor(
    @InjectRepository(dates) private repo: Repository<dates>,
    @InjectRepository(Pacientes) private repoPaciente: Repository<Pacientes>,
    @InjectRepository(Nutriologo) private repoNutriologo: Repository<Nutriologo>,
    @Inject('MAILS_SERVICE') private clientMailsProxy: ClientProxy
  ){}

  async save(data: dates) {
    // validar que el paciente tiene una sola cita agendada
    const validate = await this.repo.count({
      where: {
        day: (+data.day).toString(),
        month: (+data.month).toString(),
        hour: (+data.hour).toString(),
        state: 'AGENDADO',
        medico: {
          id: data.medico.id
        }
      }
    });
    if(validate  !== 0) throw Error('Ya alguien agendo una cita a esta hora.');
    // validar que la ultima cita este terminada
    const agendadas = await this.repo.count({
      where: {
        state: 'AGENDADO',
        medico: {
          id: data.medico.id
        }, 
        paciente: {
          id: data.paciente.id
        }
      }
    });

    if(agendadas >= 1) throw new Error('Ya tienes una cita medica agendada.');
    this.clientMailsProxy.emit({ send: 'enviar'}, { })
    return await this.repo.save(data);
  }


  async consultarCitasMedico(id: number) {
    return await this.repo.find({
      relations: ['paciente'],
      where: {
        state: 'AGENDADO',
        medico: {
          id
        }
      }
    })
  }

  async crearHorasDeCita(id: number, fecha: string) {
    const nutriologo = await this.repoNutriologo.findOne({
      relations: ['calendario'],
      where: {
        id: id
      }
    });
    let fechaParaCita = new Date(fecha);
    const tiempoCita = +nutriologo.calendario.timeDates;
    const fechasNoDisponible = JSON.parse(nutriologo.calendario.daysOut) as string[];
    //la cita se hace en una fecha no disponible ?
    if(fechasNoDisponible.some(i => i.includes(fecha))) {
      throw new Error('Esta fecha no esta disponible para apartar cita');  
    }
    const horarioSemana = JSON.parse(nutriologo.calendario.horario);
    let diaDeCita = dias[fechaParaCita.getDay() + 1];
    let horas = [];
    let horasDisponibleDia = horarioSemana[diaDeCita] as { from: string, to: string }[]
    for (let index = 0; index < horasDisponibleDia.length; index++) {
      const { from, to } = horasDisponibleDia[index];
      const hourFrom = +from.split(':')[0];
      const minFrom = +from.split(':')[1];

      const hourTo = +to.split(':')[0];
      const minTo = +to.split(':')[1];

      let fromDate = new Date();
      fromDate.setHours(hourFrom, minFrom);

      let toDate = new Date();
      toDate.setHours(hourTo, minTo);

      horas.push(...this.procesarHoras(fromDate, toDate, tiempoCita));
    }

    // verficamos que las horas pueden ser agendadas

    // año - mes - dia
    const citas = await this.repo.find({
      where: {
        day: (+fecha.split('-')[2]).toString(),
        month: (+fecha.split('-')[1]).toString(),
        year: (+fecha.split('-')[0]).toString(),
        medico: {
          id: id
        }
      }
    });
    let horasCitas = citas.map(i => (i.hour));
    horas = horas.filter(x => !horasCitas.includes(x)).concat(horasCitas.filter(y => !horas.includes(y)));
    return horas;
  }

  procesarHoras(from: Date, to: Date, min: number) {
    let hours = [];
    while(from < to) {
      const fromHour = from.getHours().toString();
      const fromMins = from.getMinutes().toString();
      let mins = (fromHour.length > 1 ? fromHour : '0'+fromHour ) + ':' + (fromMins.length > 1 ? fromMins : '0'+ fromMins);
      hours.push(mins);
      from.setMinutes(from.getMinutes() + min);
    }
    return hours;
  }
}

