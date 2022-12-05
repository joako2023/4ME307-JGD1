import { LibreriaAlimentos } from '@app/dominio/entities/libreria-alimentos.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LibreriaAlimentosDto extends LibreriaAlimentos {
  @ApiProperty()
  public nombre: string;
}
