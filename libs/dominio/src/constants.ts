import { User } from '@app/dominio/entities/user.entity';
import { Alimentos } from '@app/dominio/entities/alimentos.entity';
import { AlimentosSugeridos } from '@app/dominio/entities/alimentos-sugeridos.entity';
import { CategoriasSmae } from '@app/dominio/entities/categorias-smae.entity';
import { Equivalencias } from '@app/dominio/entities/equivalencias.entity';
import { Establecimiento } from '@app/dominio/entities/establecimiento.entity';
import { EvaluacionesQuimicas } from '@app/dominio/entities/evaluaciones-quimicas.entity';
import { HistorialPacientes } from '@app/dominio/entities/historial.pacientes.entity';
import { LibreriaAlimentos } from '@app/dominio/entities/libreria-alimentos.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Patologia } from '@app/dominio/entities/patologia.entity';
import { Plan } from '@app/dominio/entities/plan.entity';
import { Servicios } from '@app/dominio/entities/servicios.entity';
import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';
import { TipoEstablecimiento } from '@app/dominio/entities/tipo-establecimiento.entity';
import { dates } from 'apps/dates/src/entities/dates.entity';
import { calendario } from './entities/calendario.entity';
export const entities = [
  Alimentos,
  AlimentosSugeridos,
  CategoriasSmae,
  Equivalencias,
  Establecimiento,
  EvaluacionesQuimicas,
  HistorialPacientes,
  LibreriaAlimentos,
  Nutriologo,
  Pacientes,
  Patologia,
  Plan,
  Servicios,
  Suscripciones,
  TipoEstablecimiento,
  User,
  dates,
  calendario
];

export const VARCONNECTION = <any>{
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'db_api_sd_test',
  entities: [...entities],
  synchronize: true,
  logging: false,
};
export const categoriasSmae = [
  'INTRODUCCION',
  'INDICE',
  'TABLA 1',
  'TABLA 2',
  'TABLA 3',
  'VERDURAS',
  'FRUTAS',
  'CEREALES SIN GRASA',
  'CEREALES CON GRASA',
  'LEGUMINOSAS',
  'ALIMENTOS DE ORIGEN ANIMAL MUY BAJO APORTE DE GRASA',
  ' ALIMENTOS DE ORIGEN ANIMAL BAJO APORTE DE GRASA',
  'ALIMENTOS DE ORIGEN ANIMAL MODERADO APORTE DE GRASA',
  'ALIMENTOS DE ORIGEN ANIMAL ALTO APORTE DE GRASA',
  'LECHE DESCREMADA',
  'LECHE SEMIDESCREMADA',
  'LECHE ENTERA',
  'LECHE CON AZÚCAR',
  'ACEITES Y GRASAS',
  'ACEITES Y GRASAS CON PROTEINA',
  'AZUCARES SIN GRASA',
  'AZÚCARES CON GRASA',
  'ALIMENTOS LIBRES EN ENERGÍA',
  'BEBIDAS ALCOHOLICAS',
  'PRODUTOS YAKULT',
  'PLATILLOS BEBIDAS',
  'PLATILLOS DE DESAYUNO',
  'PLATILLOS GUARNICIONES',
  'PLATILLOS SOPAS',
  'PLATILLOS PLATOS FUERTES',
  'PLATILLOS POSTRES',
  'BEBIDAS Y BEBIDAS ALCOHOLICAS',
  'PLATILLOS DESAYUNO',
  'GUARNICIONES',
  'SOPAS',
  'PLATOS FUERTES',
  'POSTRES',
  'BURGER KING',
  'MC DONALDS',
  'WENDYS',
  'DOMINOS',
  'PAPA JOHNS',
  'PIZZA HUT',
  'LITTLE CAESARS',
  'KFC',
  'SUBWAY',
  'TACO BELL',
  'STARBUCKS',
];

export const jwtConstants = {
  secret: 'secretKey',
};
