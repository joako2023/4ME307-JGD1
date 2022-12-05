import { CategoriasSmae } from '@app/dominio/entities/categorias-smae.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CategoriasSmaeDto extends CategoriasSmae {
  @ApiProperty()
  nombre: string;
}
