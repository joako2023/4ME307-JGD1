import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { SuscripcionesDto } from '@app/dominio/dtos/suscripciones.dto';
import { SuscripcionesService } from '@app/services/suscripciones/suscripciones.service';

@Controller('suscripciones')
export class SuscripcionesController extends ControllerBase<SuscripcionesDto> {
  constructor(protected service: SuscripcionesService) {
    super(service, []);
  }
}
