import { Injectable } from '@nestjs/common';
import { HistorialPacientes } from '@app/dominio/entities/historial.pacientes.entity';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialPacientesService extends ServiceBase<HistorialPacientes> {
  constructor(
    @InjectRepository(HistorialPacientes)
    protected repository: Repository<HistorialPacientes>,
  ) {
    super(repository);
  }
}
