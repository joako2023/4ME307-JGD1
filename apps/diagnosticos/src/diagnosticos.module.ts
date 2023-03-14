import { DominioModule } from '@app/dominio';
import { calendario } from '@app/dominio/entities/calendario.entity';
import { Calificacion } from '@app/dominio/entities/calificacion.entity';
import { dates } from '@app/dominio/entities/dates.entity';
import { Diagnosticos } from '@app/dominio/entities/diagnostico.entity';
import { Establecimiento } from '@app/dominio/entities/establecimiento.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Plan } from '@app/dominio/entities/plan.entity';
import { Servicios } from '@app/dominio/entities/servicios.entity';
import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';
import { User } from '@app/dominio/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiagnosticosController } from './diagnosticos.controller';
import { DiagnosticosService } from './diagnosticos.service';

@Module({
  imports: [ DominioModule, TypeOrmModule.forFeature([
    User,
    Diagnosticos,
    Pacientes,
    Nutriologo,
    dates,
    Establecimiento,
    Suscripciones,
    Plan,
    Servicios,
    calendario,
    Calificacion 
  ])],
  controllers: [DiagnosticosController],
  providers: [DiagnosticosService],
})
export class DiagnosticosModule {}
