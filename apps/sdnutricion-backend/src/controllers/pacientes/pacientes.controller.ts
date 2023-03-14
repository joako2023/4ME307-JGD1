import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { PacientesService } from '@app/services/pacientes/pacientes.service';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { PacientesDto } from '@app/dominio/dtos/pacientes.dto';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('pacientes')
export class PacientesController extends ControllerBase<PacientesDto> {
  constructor(protected service: PacientesService) {
    super(service, []);
  }

  @Get('/medico/:idMedico')
  async consultarPacientesMedico(@Param('idMedico') id: number) {
    return await this.service.obtenerTodos({
      relations: ['usuario'],
      where: {
        nutriologos: {
          id: id
        }
      }
    })
  }
}
