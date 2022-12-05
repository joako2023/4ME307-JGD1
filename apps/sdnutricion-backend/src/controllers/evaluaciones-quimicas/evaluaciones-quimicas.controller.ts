import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { EvaluacionesQuimicasDto } from '@app/dominio/dtos/evaluaciones-quimicas.dto';
import { EvaluacionesQuimicasService } from '@app/services/evaluaciones-quimicas/evaluaciones-quimicas.service';

@Controller('evaluaciones-quimicas')
export class EvaluacionesQuimicasController extends ControllerBase<EvaluacionesQuimicasDto> {
  constructor(protected service: EvaluacionesQuimicasService) {
    super(service, []);
  }
}
