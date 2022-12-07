import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { NutriologoDto } from '@app/dominio/dtos/nutriologo.dto';
import { NutriologoService } from '@app/services/nutriologo/nutriologo.service';

@Controller('nutriologo')
export class NutriologoController extends ControllerBase<NutriologoDto> {
  constructor(protected service: NutriologoService) {
      super(service, ['establecimiento', 'suscripciones', 'usuario', 'pacientes']);
  }
}
