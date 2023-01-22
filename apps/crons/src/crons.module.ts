import { Module } from '@nestjs/common';
import { CronsController } from './crons.controller';
import { CronsService } from './crons.service';

@Module({
  imports: [],
  controllers: [CronsController],
  providers: [CronsService],
})
export class CronsModule {}
