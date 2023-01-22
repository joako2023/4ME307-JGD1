import { ControllerBase } from '@app/controller';
import { CalendarioDto } from '@app/dominio/dtos/calendario.dto';
import { CalendarioService } from '@app/services/calendario/calendario.service';
import { Controller } from '@nestjs/common';

@Controller('calendario')
export class CalendarioController extends ControllerBase<CalendarioDto> {
    constructor(
        private calendarioSvc: CalendarioService
    ){
        super(calendarioSvc, [])
    }
}
