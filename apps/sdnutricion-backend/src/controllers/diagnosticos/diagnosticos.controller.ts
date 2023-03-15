import { Diagnosticos } from '@app/dominio/entities/diagnostico.entity';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Controller('diagnosticos')
export class DiagnosticosController {
    constructor(
        @Inject('DIAGNOSTICOS_SERVICE') private clientProxy: ClientProxy
    ){}

    @Post()
    guardarDiagnostico(@Body() data: Diagnosticos) {
        return this.clientProxy.send({ diag: 'save'}, data).pipe(timeout(10000));
    }

    @Get('paciente/:idMedico/:idPaciente')
    getDiagnosticosPaciente(@Param('idPaciente') idPaciente: number, @Param('idMedico') idMedico: number) {
        return this.clientProxy.send({ diag: 'get-paciente'}, { idPaciente, idMedico }).pipe(timeout(10000));
    }
}
