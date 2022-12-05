import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { EquivalenciasDto } from '@app/dominio/dtos/equivalencias.dto';
import { EquivalenciasService } from '@app/services/equivalencias/equivalencias.service';

@Controller('equivalencias')
export class EquivalenciasController extends ControllerBase<EquivalenciasDto> {
  constructor(protected service: EquivalenciasService) {
    super(service, []);
  }
}
