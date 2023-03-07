import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from '@app/dominio/entities/plan.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { PlanDto } from '@app/dominio/dtos/plan.dto';

@Injectable()
export class PlanService extends ServiceBase<Plan> {
  constructor(@InjectRepository(Plan) protected repository: Repository<Plan>) {
    super(repository);
  }


  async actualizar(id: number | string, data: QueryDeepPartialEntity<PlanDto>): Promise<any> {
    const plan = await this.repository.findOne({
      where: {
        id: +id
      }
    });
    
    return await this.repository.save({...plan, ...data } as Plan);
  }
}
