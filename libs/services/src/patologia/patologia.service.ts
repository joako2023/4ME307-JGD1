import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patologia } from '@app/dominio/entities/patologia.entity';

@Injectable()
export class PatologiaService extends ServiceBase<Patologia> {
  constructor(
    @InjectRepository(Patologia) protected repository: Repository<Patologia>,
  ) {
    super(repository);
  }
}
