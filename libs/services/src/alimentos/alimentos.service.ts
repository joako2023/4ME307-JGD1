import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alimentos } from '@app/dominio/entities/alimentos.entity';

@Injectable()
export class AlimentosService extends ServiceBase<Alimentos> {
  constructor(
    @InjectRepository(Alimentos) protected repository: Repository<Alimentos>,
  ) {
    super(repository);
  }
}
