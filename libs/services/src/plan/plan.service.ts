import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from '@app/dominio/entities/plan.entity';

@Injectable()
export class PlanService extends ServiceBase<Plan> {
  constructor(@InjectRepository(Plan) protected repository: Repository<Plan>) {
    super(repository);
  }
}
