import { HistorialPacientes } from '@app/dominio/entities/historial.pacientes.entity';
import { ApiProperty } from '@nestjs/swagger';

export class HistorialPacientesDto extends HistorialPacientes {
  @ApiProperty()
  public fecha?: Date;
}
