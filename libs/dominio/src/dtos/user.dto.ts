import { ApiProperty } from '@nestjs/swagger';
import { User } from '@app/dominio/entities/user.entity';

export class UserDto extends User {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  confirmed: boolean;

  @ApiProperty()
  telefono: string;

  @ApiProperty({ examples: ['ADMIN', 'NUTRIOLOGO', 'PACIENTE', 'COLABORADOR'] })
  rol: string;
}
