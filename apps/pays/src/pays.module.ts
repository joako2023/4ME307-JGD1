import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaysController } from './pays.controller';
import { PaysService } from './pays.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env'
    })
  ],
  controllers: [PaysController],
  providers: [PaysService],
})
export class PaysModule {}
