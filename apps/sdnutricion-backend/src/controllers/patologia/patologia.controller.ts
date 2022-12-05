import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { PatologiaDto } from '@app/dominio/dtos/patologia.dto';
import { PatologiaService } from '@app/services/patologia/patologia.service';

@Controller('patologia')
export class PatologiaController extends ControllerBase<PatologiaDto> {
  constructor(protected service: PatologiaService) {
    super(service, []);
  }
}
