import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { PlanDto } from '@app/dominio/dtos/plan.dto';
import { PlanService } from '@app/services/plan/plan.service';

@Controller('plan')
export class PlanController extends ControllerBase<PlanDto> {
  constructor(protected service: PlanService) {
    super(service, ['servicios']);
  }
}
