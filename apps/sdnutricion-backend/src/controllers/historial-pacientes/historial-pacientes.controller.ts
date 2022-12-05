import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { HistorialPacientesDto } from '@app/dominio/dtos/historial.pacientes.dto';
import { HistorialPacientesService } from '@app/services/historial-pacientes/historial-pacientes.service';

@Controller('historial-pacientes')
export class HistorialPacientesController extends ControllerBase<HistorialPacientesDto> {
  constructor(protected service: HistorialPacientesService) {
    super(service, []);
  }
}
