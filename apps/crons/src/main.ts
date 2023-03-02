import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CronsModule } from './crons.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CronsModule, {
    transport: Transport.TCP, options: {
      port: 3007
    }
  });
  await app.listen();
}
bootstrap();
