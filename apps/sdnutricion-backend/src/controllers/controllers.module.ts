import { Module } from "@nestjs/common";
import { AlimentosController } from "./alimentos/alimentos.controller";
import { AlimentosSugeridosController } from "./alimentos-sugeridos/alimentos-sugeridos.controller";
import { CategoriasSmaeController } from "./categorias-smae/categorias-smae.controller";
import { EquivalenciasController } from "./equivalencias/equivalencias.controller";
import { EstablecimientoController } from "./establecimiento/establecimiento.controller";
import { EvaluacionesQuimicasController } from "./evaluaciones-quimicas/evaluaciones-quimicas.controller";
import { LibreriaAlimentosController } from "./libreria-alimentos/libreria-alimentos.controller";
import { NutriologoController } from "./nutriologo/nutriologo.controller";
import { PacientesController } from "./pacientes/pacientes.controller";
import { PatologiaController } from "./patologia/patologia.controller";
import { PlanController } from "./plan/plan.controller";
import { ServiciosController } from "./servicios/servicios.controller";
import { SuscripcionesController } from "./suscripciones/suscripciones.controller";
import { TipoEstablecimientoController } from "./tipo-establecimiento/tipo-establecimiento.controller";
import { UserController } from "./user/user.controller";
import { ServicesModule } from "@app/services";
import { MulterModule } from "@nestjs/platform-express";
import { UploadedsController } from './uploadeds/uploadeds.controller';
import { CitasController } from './citas/citas.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { CalendarioController } from './calendario/calendario.controller';
import { MailsController } from './mails/mails.controller';
import { PaysController } from './pays/pays.controller';
import { ChartsController } from "./charts/charts.controller";
import { MetricasController } from "./metricas/metricas.controller";
import { FactorysModule } from "@app/factorys";
import { CalificicacionController } from "./calificacion/calificacion.controller";
import { DiagnosticosController } from './diagnosticos/diagnosticos.controller';
import { ChatController } from './chat/chat.controller';
import { ChatGateway } from "./chat/chat.gateway";
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: "./uploads"
      })
    }),
    ClientsModule.register([
      { name: 'CITAS_SERVICE', transport: Transport.TCP, options: { port: 3006 } },
      { name: 'MAILS_SERVICE', transport: Transport.TCP, options: { port: 3005 } },
      { name: 'DIAGNOSTICOS_SERVICE', transport: Transport.TCP, options: { port: 3010 } },
      { name: 'CHAT_SERVICE', transport: Transport.TCP, options: { port: 3011 } },
      { name: 'PAYS_SERVICE', transport: Transport.TCP }
    ]),
    ServicesModule, FactorysModule
  ],
  controllers: [
    AlimentosController,
    AlimentosSugeridosController,
    CategoriasSmaeController,
    EquivalenciasController,
    EstablecimientoController,
    EvaluacionesQuimicasController,
    LibreriaAlimentosController,
    NutriologoController,
    PacientesController,
    PatologiaController,
    PlanController,
    ServiciosController,
    SuscripcionesController,
    TipoEstablecimientoController,
    UserController,
    UploadedsController,
    CitasController,
    CalendarioController,
    MailsController,
    PaysController,
    MetricasController,
    ChartsController,
    CalificicacionController,
    DiagnosticosController,
    ChatController
  ],
  providers: [ChatGateway]
})
export class ControllersModule {
}
