import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluacionesQuimicas } from '@app/dominio/entities/evaluaciones-quimicas.entity';

@Injectable()
export class EvaluacionesQuimicasService extends ServiceBase<EvaluacionesQuimicas> {
  constructor(
    @InjectRepository(EvaluacionesQuimicas)
    protected repository: Repository<EvaluacionesQuimicas>,
  ) {
    super(repository);
  }
}
