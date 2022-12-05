import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoEstablecimiento } from '@app/dominio/entities/tipo-establecimiento.entity';

@Injectable()
export class TipoEstablecimientoService extends ServiceBase<TipoEstablecimiento> {
  constructor(
    @InjectRepository(TipoEstablecimiento)
    protected repository: Repository<TipoEstablecimiento>,
  ) {
    super(repository);
  }
}
