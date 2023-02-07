import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PaysModule } from './pays.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(PaysModule, {
    transport: Transport.TCP
  });
  await app.listen();
}
bootstrap();
