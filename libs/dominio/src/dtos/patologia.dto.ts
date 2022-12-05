import { Patologia } from '@app/dominio/entities/patologia.entity';
import { ApiProperty } from '@nestjs/swagger';

export class PatologiaDto extends Patologia {
  @ApiProperty()
  public nombre: string;
}
