import { calendario } from "@app/dominio/entities/calendario.entity";
import { Establecimiento } from "@app/dominio/entities/establecimiento.entity";
import { Nutriologo } from "@app/dominio/entities/nutriologo.entity";
import { Pacientes } from "@app/dominio/entities/pacientes.entity";
import { Plan } from "@app/dominio/entities/plan.entity";
import { Servicios } from "@app/dominio/entities/servicios.entity";
import { Suscripciones } from "@app/dominio/entities/suscripciones.entity";
import { User } from "@app/dominio/entities/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { dates } from "./entities/dates.entity";

export const entities = [
    dates,
    Pacientes,
    Nutriologo,
    User,
    Establecimiento,
    Suscripciones,
    Plan,
    Servicios,
    calendario
];
export const conn = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'db_api_sd_test',
  entities: [...entities],
  synchronize: false,
  logging: false,
} as TypeOrmModuleOptions;