import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    UploadedFiles,
    UseInterceptors,
  } from '@nestjs/common';
  import { ControllerBase } from '@app/controller';
  import { CalificacionDto } from '@app/dominio/dtos/calificacion.dto';
  import { CalificacionService } from '@app/services/calificacion/calificacion.service';

  @Controller('calificacion')
  export class CalificicacionController extends ControllerBase<CalificacionDto>{
    constructor(protected service: CalificacionService){
        super(service, [
            'pacientes',
            'nutriologos'
        ]);
    }

    @Post()
    create(@Body() calificacion: CalificacionDto){
        return this.service.create(calificacion);
    }

    @Get('filtro/paciente/medico/:idP/:idM')
    consultarCalificacionesPacienteMedico(@Param('idP') idP: number,@Param('idM') idM: number){
        return this.service.consultantPatientDoctor(idP, idM);
    }

    @Get('filtro/medico/:id')
    consultarUltimas5Calificaciones(@Param('id') id: number){
        return this.service.consultarCalNutriologo(id);
    }
  }