import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class PacientesDto extends Pacientes {
  @ApiProperty()
  nutriologo: Nutriologo;

  @ApiProperty()
  usuario?: User;
}
