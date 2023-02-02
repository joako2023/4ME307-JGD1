import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '@app/dominio/constants';
import { UserService } from './user/user.service';
import { AlimentosService } from './alimentos/alimentos.service';
import { AlimentosSugeridosService } from './alimentos-sugeridos/alimentos-sugeridos.service';
import { CategoriasSmaeService } from './categorias-smae/categorias-smae.service';
import { EquivalenciasService } from './equivalencias/equivalencias.service';
import { EstablecimientoService } from './establecimiento/establecimiento.service';
import { EvaluacionesQuimicasService } from './evaluaciones-quimicas/evaluaciones-quimicas.service';
import { HistorialPacientesService } from './historial-pacientes/historial-pacientes.service';
import { LibreriaAlimentosService } from './libreria-alimentos/libreria-alimentos.service';
import { NutriologoService } from './nutriologo/nutriologo.service';
import { PacientesService } from './pacientes/pacientes.service';
import { PatologiaService } from './patologia/patologia.service';
import { PlanService } from './plan/plan.service';
import { ServiciosService } from './servicios/servicios.service';
import { SuscripcionesService } from './suscripciones/suscripciones.service';
import { TipoEstablecimientoService } from './tipo-establecimiento/tipo-establecimiento.service';
import { CalendarioService } from './calendario/calendario.service';
import { MetricasService } from './metricas/metricas.service';

const services = [
  UserService,
  AlimentosService,
  AlimentosSugeridosService,
  CategoriasSmaeService,
  EquivalenciasService,
  EstablecimientoService,
  EvaluacionesQuimicasService,
  HistorialPacientesService,
  LibreriaAlimentosService,
  NutriologoService,
  PacientesService,
  PatologiaService,
  PlanService,
  ServiciosService,
  SuscripcionesService,
  TipoEstablecimientoService,
  CalendarioService,
  MetricasService
];
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services],
  exports: [...services],
})
export class ServicesModule {}
