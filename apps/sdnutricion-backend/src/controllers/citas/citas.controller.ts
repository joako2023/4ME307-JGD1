import { Controller, Inject, Post, Body} from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
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
}
