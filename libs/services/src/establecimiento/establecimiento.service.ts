import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Establecimiento } from '@app/dominio/entities/establecimiento.entity';

@Injectable()
export class EstablecimientoService extends ServiceBase<Establecimiento> {
  constructor(
    @InjectRepository(Establecimiento)
    protected repository: Repository<Establecimiento>,
  ) {
    super(repository);
  }
}
