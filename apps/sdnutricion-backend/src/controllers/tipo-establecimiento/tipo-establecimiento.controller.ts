import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { TipoEstablecimientoDto } from '@app/dominio/dtos/tipo-establecimiento.dto';
import { TipoEstablecimientoService } from '@app/services/tipo-establecimiento/tipo-establecimiento.service';

@Controller('tipo-establecimiento')
export class TipoEstablecimientoController extends ControllerBase<TipoEstablecimientoDto> {
  constructor(protected service: TipoEstablecimientoService) {
    super(service, []);
  }
}
