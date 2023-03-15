import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DatesModule } from './dates.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(DatesModule,{
    transport: Transport.TCP, options: { 
      port: 3009
    }
  });
  await app.listen();
}
bootstrap();
