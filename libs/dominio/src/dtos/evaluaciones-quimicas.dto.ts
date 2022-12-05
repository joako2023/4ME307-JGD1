import { ApiProperty } from '@nestjs/swagger';
import { EvaluacionesQuimicas } from '@app/dominio/entities/evaluaciones-quimicas.entity';

export class EvaluacionesQuimicasDto extends EvaluacionesQuimicas {
  @ApiProperty()
  public minimo: number;

  @ApiProperty()
  public maximo: number;

  @ApiProperty()
  public nombre: string;
}
