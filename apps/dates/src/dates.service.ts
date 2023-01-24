import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { dates } from './entities/dates.entity';

@Injectable()
export class DatesService {
  constructor(
    @InjectRepository(dates) private repo: Repository<dates>,
    @InjectRepository(Pacientes) private repoPaciente: Repository<Pacientes>,
    @Inject('MAILS_SERVICE') private clientMailsProxy: ClientProxy
  ){}

  async save(data: dates) {
    // validar que el paciente tiene una sola cita agendada
    const validate = await this.repo.count({
      where: {
        day: data.day,
        month: data.month,
        hour: data.hour,
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

    const paciente = 
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
}
