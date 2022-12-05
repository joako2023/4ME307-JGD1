import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';

@Injectable()
export class SuscripcionesService extends ServiceBase<Suscripciones> {
  constructor(
    @InjectRepository(Suscripciones)
    protected repository: Repository<Suscripciones>,
  ) {
    super(repository);
  }
}
