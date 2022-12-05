import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { EstablecimientoDto } from '@app/dominio/dtos/establecimiento.dto';
import { EstablecimientoService } from '@app/services/establecimiento/establecimiento.service';

@Controller('establecimiento')
export class EstablecimientoController extends ControllerBase<EstablecimientoDto> {
  constructor(protected service: EstablecimientoService) {
    super(service, []);
  }
}
