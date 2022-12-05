import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Plan } from '@app/dominio/entities/plan.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';

export class SuscripcionesDto extends Suscripciones {
  @ApiProperty()
  fechaInicio: Date;

  @ApiProperty()
  fechaExpiracion?: Date;

  @ApiProperty()
  duracion: number;

  @ApiProperty()
  precioPlan: number;

  @ApiProperty()
  pago: number;

  @ApiProperty()
  mesesSinPago?: number;

  @ApiProperty()
  fechaExpiracionSinPago?: Date;

  @ApiProperty()
  estado: string;

  @ApiProperty()
  plan?: Plan;

  @ApiProperty()
  nutriologo?: Nutriologo;
}
