import { calendario } from "@app/dominio/entities/calendario.entity";
import { Calificacion } from "@app/dominio/entities/calificacion.entity";
import { dates } from "@app/dominio/entities/dates.entity";
import { Diagnosticos } from "@app/dominio/entities/diagnostico.entity";
import { Establecimiento } from "@app/dominio/entities/establecimiento.entity";
import { Nutriologo } from "@app/dominio/entities/nutriologo.entity";
import { Pacientes } from "@app/dominio/entities/pacientes.entity";
import { Plan } from "@app/dominio/entities/plan.entity";
import { Servicios } from "@app/dominio/entities/servicios.entity";
import { Suscripciones } from "@app/dominio/entities/suscripciones.entity";
import { User } from "@app/dominio/entities/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const entities = [
    dates,
    Pacientes,
    Nutriologo,
    User,
    Establecimiento,
    Suscripciones,
    Plan,
    Servicios,
    calendario,
    Calificacion,
    Diagnosticos
];

export const dias = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
]
export const conn = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'sdnutricion',
  password: 'sdnutricion',
  database: 'sdnutricion',
  entities: [...entities],
  synchronize: false,
  logging: false,
} as TypeOrmModuleOptions;