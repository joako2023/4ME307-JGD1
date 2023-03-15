import { dates } from '@app/dominio/entities/dates.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { dias } from './constants';

@Injectable()
export class DatesService {
  constructor(
    @InjectRepository(dates) private repo: Repository<dates>,
    @InjectRepository(Pacientes) private repoPaciente: Repository<Pacientes>,
    @InjectRepository(Nutriologo) private repoNutriologo: Repository<Nutriologo>,
    @Inject('MAILS_SERVICE') private clientMailsProxy: ClientProxy
  ) { }

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
    if (validate !== 0) throw Error('Ya alguien agendo una cita a esta hora.');
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

    if (agendadas >= 1) throw new Error('Ya tienes una cita medica agendada.');
    this.clientMailsProxy.emit({ send: 'enviar' }, {})
    return await this.repo.save(data);
  }

  async updateSchedule(dataOld: dates, dataNew: dates) {

    // paso 1 verificar la ultima cita agendada
    const agendadas = await this.repo.count({
      where: {
        id: dataOld.id,
        state: 'AGENDADO', 
      }
    });
    if(agendadas < 1) throw new Error('La cita ya esta terminada.');

    // paso 2 verificar que la hora es valida
    const validate = await this.repo.count({
      where: {
        day: (dataNew.day).toString(),
        month: (dataNew.month).toString(),
        hour: (dataNew.hour).toString(),
        state: 'AGENDADO',
        medico: {
          id: dataNew.medico.id
        }
      }
    });
    if(validate  !== 0) throw Error('Ya alguien agendo una cita a esta hora.');

    // paso 3 actualizar la ultima cita agendada
    return await this.repo.update(dataOld.id, dataNew);
  }

  async deletedate(id: number | string){
    return await this.repo.delete(id);
  }

  async actualizarCita(id: number, estado: string) {
    await this.repo.update(id, { state: estado })
    return await this.repo.findOne({ where: { id } });
  }


  async obtener(id: any) {
    return await this.repo.findOne({
      where: {
        id: id
      }
    });
  }

  async consultarCitasMedico(id: number) {
    return await this.repo.find({
      relations: ['paciente', 'paciente.usuario'],
      where: {
        state: 'AGENDADO',
        medico: {
          id
        }
      }
    });
  }

  async consultarCitasPaciente(id: number) {
    return await this.repo.find({
      relations: ['medico'],
      where: {
        paciente: {
          id
        }
      }
    });
  }

  async consultarCitasPacienteMedico(idP: number, idM: number) {
    return await this.repo.count({
      where: {
        state: 'TERMINADO',
        paciente: {
          id: idP
        },
        medico: {
          id: idM
        }
      }
    });
  }

  async crearHorasDeCita(id: number, fecha: string) {
    const nutriologo = await this.repoNutriologo.findOne({
      relations: ['calendario'],
      where: {
        id: id
      }
    });
    let fechaParaCita = new Date(+fecha.split('-')[0], +fecha.split('-')[1] - 1, +fecha.split('-')[2]);
    const tiempoCita = +nutriologo.calendario.timeDates;
    const fechasNoDisponible = JSON.parse(nutriologo.calendario.daysOut) as string[];
    //la cita se hace en una fecha no disponible ?
    if (fechasNoDisponible.some(i => i.includes(fecha))) {
      throw new Error('Esta fecha no esta disponible para apartar cita');
    }
    const horarioSemana = JSON.parse(nutriologo.calendario.horario);
    let diaDeCita = dias[fechaParaCita.getDay()];
    let horas = [];
    let horasDisponibleDia = horarioSemana[diaDeCita] as { from: string, to: string }[]
    for (let index = 0; index < horasDisponibleDia.length; index++) {
      const { from, to } = horasDisponibleDia[index];
      let hourFrom = +from.split(':')[0];
      let minFrom = +from.split(':')[1];

      let hourTo = +to.split(':')[0];
      let minTo = +to.split(':')[1];

      let fromDate = new Date(+fecha.split('-')[0], +fecha.split('-')[1] - 1, +fecha.split('-')[2]);
      fromDate.setHours(hourFrom, minFrom);

      let toDate = new Date(+fecha.split('-')[0], +fecha.split('-')[1] - 1, +fecha.split('-')[2]);
      toDate.setHours(hourTo, minTo);

      horas.push(...this.procesarHoras(fromDate, toDate, tiempoCita));
    }

    // verficamos que las horas pueden ser agendadas

    // año - mes - dia
    const citas = await this.repo.find({
      where: {
        day: ('0' + fechaParaCita.getDate()).slice(-2),
        month: ('0' + (fechaParaCita.getMonth() + 1)).slice(-2),
        year: fechaParaCita.getFullYear().toString(),
        state: 'AGENDADO',
        medico: {
          id: id
        }
      }
    });

    // horas programadas para agendar citas
    let horasCitas = citas.map(i => (i.hour));

    console.log(horasCitas);
    //horas = horas.filter(x => !horasCitas.includes(x));

    // quitar las horas agendadas de las horas disponibles 
    let horasRetornar = [];

    horas.forEach(horadisponible => {
      let respHoraAgendada = {
        hora: horadisponible,
        disponibilidad: 'Disponible'
      };
      respHoraAgendada.disponibilidad = horasCitas.some(i => i === horadisponible) ? 'noDisponible' : 'Disponible';
      horasRetornar.push(respHoraAgendada);
    });

    return horasRetornar;
    //return horas;
  }

  procesarHoras(from: Date, to: Date, min: number) {
    let hours = [];
    while (from < to) {
      const fromHour = from.getHours().toString();
      const fromMins = from.getMinutes().toString();
      let mins = (fromHour.length > 1 ? fromHour : '0' + fromHour) + ':' + (fromMins.length > 1 ? fromMins : '0' + fromMins);
      hours.push(mins);
      from.setMinutes(from.getMinutes() + min);
    }
    return hours;
  }
}

