import { Servicios } from '@app/dominio/entities/servicios.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Plan } from '@app/dominio/entities/plan.entity';

export class ServiciosDto extends Servicios {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  planes: Plan[];
}
