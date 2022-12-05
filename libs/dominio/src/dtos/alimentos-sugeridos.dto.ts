import { AlimentosSugeridos } from '@app/dominio/entities/alimentos-sugeridos.entity';
import { ApiProperty } from '@nestjs/swagger';

export class AlimentosSugeridosDto extends AlimentosSugeridos {
  @ApiProperty()
  public nombre: string;
}
