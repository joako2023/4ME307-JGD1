import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicios } from '@app/dominio/entities/servicios.entity';

@Injectable()
export class ServiciosService extends ServiceBase<Servicios> {
  constructor(
    @InjectRepository(Servicios) protected repository: Repository<Servicios>,
  ) {
    super(repository);
  }
}
