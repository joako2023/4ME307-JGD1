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
  }
}
