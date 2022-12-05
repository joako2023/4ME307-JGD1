import { ApiProperty } from '@nestjs/swagger';
import { Equivalencias } from '@app/dominio/entities/equivalencias.entity';

export class EquivalenciasDto extends Equivalencias {
  @ApiProperty()
  public nombre: string;
}
