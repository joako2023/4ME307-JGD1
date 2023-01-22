import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatesController } from './dates.controller';
import { DatesService } from './dates.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [DatesController],
  providers: [DatesService],
})
export class DatesModule {}
