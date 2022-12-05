import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { ServiciosDto } from '@app/dominio/dtos/servicios.dto';
import { ServiciosService } from '@app/services/servicios/servicios.service';

@Controller('servicios')
export class ServiciosController extends ControllerBase<ServiciosDto> {
  constructor(protected service: ServiciosService) {
    super(service, []);
  }
}
