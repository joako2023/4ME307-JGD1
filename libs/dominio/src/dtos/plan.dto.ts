import { Plan } from '@app/dominio/entities/plan.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';
import { Servicios } from '@app/dominio/entities/servicios.entity';

export class PlanDto extends Plan {
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  duracion?: number;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  precioOld: number;

  @ApiProperty()
  mesesSinPago?: number;

  @ApiProperty()
  suscripciones?: Suscripciones[];

  @ApiProperty()
  servicios?: Servicios[];
}
