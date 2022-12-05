import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';

@Injectable()
export class NutriologoService extends ServiceBase<Nutriologo> {
  constructor(
    @InjectRepository(Nutriologo) protected repository: Repository<Nutriologo>,
  ) {
    super(repository);
  }
}
