import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '@app/dominio/constants';
import { UserService } from './user/user.service';
import { NutriologoService } from './nutriologo/nutriologo.service';
import { PacientesService } from './pacientes/pacientes.service';


const services = [
  UserService,
 
  NutriologoService,
  PacientesService,
 
];
@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...services],
  exports: [...services],
})
export class ServicesModule {}
