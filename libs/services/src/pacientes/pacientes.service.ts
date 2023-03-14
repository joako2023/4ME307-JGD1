import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';

@Injectable()
export class PacientesService extends ServiceBase<Pacientes> {
  constructor(
    @InjectRepository(Pacientes) protected repository: Repository<Pacientes>,
  ) {
    super(repository);
    repository.save({
      id: 1,
      active: false,
      nombres: 'daniel',
      apellidos: 'san juan',
      identificacion: 'pacienteprueba',
      usuario: {
        id: 3
      }
    }).then((resp) => console.log('paciente de prueba creado')).catch((err) => console.log('paciente de prueba listo'));
  }
}
