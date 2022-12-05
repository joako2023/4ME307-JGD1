import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equivalencias } from '@app/dominio/entities/equivalencias.entity';

@Injectable()
export class EquivalenciasService extends ServiceBase<Equivalencias> {
  constructor(
    @InjectRepository(Equivalencias)
    protected repository: Repository<Equivalencias>,
  ) {
    super(repository);
  }
}
