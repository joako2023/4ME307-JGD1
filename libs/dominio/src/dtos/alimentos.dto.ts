import { ApiProperty } from '@nestjs/swagger';
import { Alimentos } from '@app/dominio/entities/alimentos.entity';

export class AlimentosDto extends Alimentos {
  @ApiProperty()
  public nombre: string;
}
