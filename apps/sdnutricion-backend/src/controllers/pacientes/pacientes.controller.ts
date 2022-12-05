import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { PacientesDto } from '@app/dominio/dtos/pacientes.dto';
import { PacientesService } from '@app/services/pacientes/pacientes.service';

@Controller('pacientes')
export class PacientesController extends ControllerBase<PacientesDto> {
  constructor(protected service: PacientesService) {
    super(service, []);
  }
}
