import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { ApiProperty } from '@nestjs/swagger';

export class PacientesDto extends Pacientes {
  @ApiProperty()
  nutriologo: Nutriologo;
}
