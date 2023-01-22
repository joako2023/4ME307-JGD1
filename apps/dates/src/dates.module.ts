import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { conn, entities } from './constants';
import { DatesController } from './dates.controller';
import { DatesService } from './dates.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(conn), 
    TypeOrmModule.forFeature([
      ...entities
    ])],
  controllers: [DatesController],
  providers: [DatesService],
})
export class DatesModule {}
