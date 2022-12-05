import { TipoEstablecimiento } from '@app/dominio/entities/tipo-establecimiento.entity';
import { ApiProperty } from '@nestjs/swagger';

export class TipoEstablecimientoDto extends TipoEstablecimiento {
  @ApiProperty()
  public nombre: string;
}
