import { Module } from '@nestjs/common';
import { AlimentosController } from './alimentos/alimentos.controller';
import { AlimentosSugeridosController } from './alimentos-sugeridos/alimentos-sugeridos.controller';
import { CategoriasSmaeController } from './categorias-smae/categorias-smae.controller';
import { EquivalenciasController } from './equivalencias/equivalencias.controller';
import { EstablecimientoController } from './establecimiento/establecimiento.controller';
import { EvaluacionesQuimicasController } from './evaluaciones-quimicas/evaluaciones-quimicas.controller';
import { HistorialPacientesController } from './historial-pacientes/historial-pacientes.controller';
import { LibreriaAlimentosController } from './libreria-alimentos/libreria-alimentos.controller';
import { NutriologoController } from './nutriologo/nutriologo.controller';
import { PacientesController } from './pacientes/pacientes.controller';
import { PatologiaController } from './patologia/patologia.controller';
import { PlanController } from './plan/plan.controller';
import { ServiciosController } from './servicios/servicios.controller';
import { SuscripcionesController } from './suscripciones/suscripciones.controller';
import { TipoEstablecimientoController } from './tipo-establecimiento/tipo-establecimiento.controller';
import { UserController } from './user/user.controller';
import { ServicesModule } from '@app/services';

@Module({
  imports: [ServicesModule],
  controllers: [
    AlimentosController,
    AlimentosSugeridosController,
    CategoriasSmaeController,
    EquivalenciasController,
    EstablecimientoController,
    EvaluacionesQuimicasController,
    HistorialPacientesController,
    LibreriaAlimentosController,
    NutriologoController,
    PacientesController,
    PatologiaController,
    PlanController,
    ServiciosController,
    SuscripcionesController,
    TipoEstablecimientoController,
    UserController,
  ],
})
export class ControllersModule {}
