import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { AlimentosService } from '@app/services/alimentos/alimentos.service';
import { AlimentosDto } from '@app/dominio/dtos/alimentos.dto';

@Controller('alimentos')
export class AlimentosController extends ControllerBase<AlimentosDto> {
  constructor(protected service: AlimentosService) {
    super(service, []);
  }
}
