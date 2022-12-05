import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { CategoriasSmaeDto } from '@app/dominio/dtos/categorias-smae.dto';
import { CategoriasSmaeService } from '@app/services/categorias-smae/categorias-smae.service';

@Controller('categorias-smae')
export class CategoriasSmaeController extends ControllerBase<CategoriasSmaeDto> {
  constructor(protected service: CategoriasSmaeService) {
    super(service, []);
  }
}
