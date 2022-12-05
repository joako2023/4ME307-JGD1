import { ApiProperty } from '@nestjs/swagger';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Establecimiento } from '@app/dominio/entities/establecimiento.entity';

export class EstablecimientoDto extends Establecimiento {
  @ApiProperty()
  public nit_establecimiento: string;

  @ApiProperty()
  public nombre: string;

  @ApiProperty()
  public direccion: string;

  @ApiProperty()
  public ciudad: string;

  @ApiProperty()
  mapUrl: string;

  @ApiProperty()
  public tipo_establecimiento: string;

  @ApiProperty()
  public nutriologos?: Nutriologo[];
}
