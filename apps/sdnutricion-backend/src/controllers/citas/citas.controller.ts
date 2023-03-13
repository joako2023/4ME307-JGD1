import { Controller, Inject, Post, Body} from '@nestjs/common';
import { Delete, Get, Param, Put } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Controller('citas')
export class CitasController {
    constructor(
        @Inject('CITAS_SERVICE') private clientCitasProxy: ClientProxy
    ) {}

    @Post()
    guardar(@Body() data: any) {
        return this.clientCitasProxy.send({ dates: 'guardar' }, data).pipe(timeout(10000));
    }

    @Put('reagendar')
    reagendar(@Body() data: any){
        return this.clientCitasProxy.send({dates: 'reagendar'}, data).pipe(timeout(10000));
    }

    @Get('medico/:id')
    consultarCitas(@Param('id') id: number) {
        return this.clientCitasProxy.send({ dates: 'citas-medico' }, { id }).pipe(timeout(10000));
    }

    @Get('horascita/:id/:fecha')
    consultarHorasCitas(@Param('id') id: number, @Param('fecha') fecha: string) {
        return this.clientCitasProxy.send({ dates: 'horas-citas' }, { id, fecha }).pipe(timeout(10000));
    }

    @Get('paciente/:id')
    consultarCitasPaciente(@Param('id') id: number){
        return this.clientCitasProxy.send({ dates: 'citas-paciente' }, { id }).pipe(timeout(10000));
    }

    @Get('filtro/paciente/medico/:idP/:idM')
    consultarCitasPaacienteMedico(@Param('idP') idP: number,@Param('idM') idM: number){
        return this.clientCitasProxy.send({ dates: 'filtro-paciente-medico' }, {idP, idM} ).pipe(timeout(10000));
    }

    @Delete(':id')
    borrar(@Param('id') id: number | string) {
      return this.clientCitasProxy.send({dates: 'eliminar'}, {id}).pipe(timeout(10000));
    }
}
