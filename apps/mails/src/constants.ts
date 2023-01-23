import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { mails } from "./entities/mail.entity";

export const entities = [
  mails
];
export const conn = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'db_api_sd_test',
  entities: [...entities],
  synchronize: true,
  logging: false,
} as TypeOrmModuleOptions;