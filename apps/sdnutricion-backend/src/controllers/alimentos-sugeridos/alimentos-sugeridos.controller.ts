import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { AlimentosSugeridosService } from '@app/services/alimentos-sugeridos/alimentos-sugeridos.service';
import { AlimentosSugeridosDto } from '@app/dominio/dtos/alimentos-sugeridos.dto';

@Controller('alimentos-sugeridos')
export class AlimentosSugeridosController extends ControllerBase<AlimentosSugeridosDto> {
  constructor(protected service: AlimentosSugeridosService) {
    super(service, []);
  }
}
