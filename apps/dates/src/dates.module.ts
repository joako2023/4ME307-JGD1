import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { conn, entities } from './constants';
import { DatesController } from './dates.controller';
import { DatesService } from './dates.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MAILS_SERVICE', transport: Transport.TCP }
    ]),
    TypeOrmModule.forRoot(conn), 
    TypeOrmModule.forFeature([
      ...entities
    ])],
  controllers: [DatesController],
  providers: [DatesService],
})
export class DatesModule {}
