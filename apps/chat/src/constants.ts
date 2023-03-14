import { VARCONNECTION } from "@app/dominio/constants";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Chat } from "./entities/chat.entity";

export const entities = [
    Chat
]

export const CONN_MYSQL = {
  ...VARCONNECTION,
  entities: [...entities]
} as TypeOrmModuleOptions;