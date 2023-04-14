import { Module } from "@nestjs/common";

import { NutriologoController } from "./nutriologo/nutriologo.controller";
import { PacientesController } from "./pacientes/pacientes.controller";

import { UserController } from "./user/user.controller";
import { ServicesModule } from "@app/services";
import { MulterModule } from "@nestjs/platform-express";
import { UploadedsController } from './uploadeds/uploadeds.controller';

import { PaysController } from './pays/pays.controller';

import { FactorysModule } from "@app/factorys";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: "./uploads"
      })
    }),
    ClientsModule.register([
      { name: 'CITAS_SERVICE', transport: Transport.TCP, options: { port: 3009 } },
      { name: 'MAILS_SERVICE', transport: Transport.TCP, options: { port: 3005 } },
      { name: 'DIAGNOSTICOS_SERVICE', transport: Transport.TCP, options: { port: 3010 } },
      { name: 'CHAT_SERVICE', transport: Transport.TCP, options: { port: 3011 } },
      { name: 'PAYS_SERVICE', transport: Transport.TCP }
    ]),
    ServicesModule, FactorysModule
  ],
  controllers: [
    
    NutriologoController,
    PacientesController,
    
    UserController,
    UploadedsController,
    
    PaysController,
    
  ],
  providers: []
})
export class ControllersModule {
}
