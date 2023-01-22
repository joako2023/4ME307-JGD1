import { calendario } from '@app/dominio/entities/calendario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../base/service.base';

@Injectable()
export class CalendarioService extends ServiceBase<calendario> {
    constructor(
        @InjectRepository(calendario)
        protected repository: Repository<calendario>,
      ) {
        super(repository);
      }
}
