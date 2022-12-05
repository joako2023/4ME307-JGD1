import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { LibreriaAlimentosDto } from '@app/dominio/dtos/libreria-alimentos.dto';
import { LibreriaAlimentosService } from '@app/services/libreria-alimentos/libreria-alimentos.service';

@Controller('libreria-alimentos')
export class LibreriaAlimentosController extends ControllerBase<LibreriaAlimentosDto> {
  constructor(private service: LibreriaAlimentosService) {
    super(service, []);
  }
}
