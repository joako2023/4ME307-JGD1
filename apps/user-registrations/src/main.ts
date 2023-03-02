import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserRegistrationsModule } from './user-registrations.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserRegistrationsModule, {
    transport: Transport.TCP,
    options: {
      port: 3013
    }
  });
  await app.listen();
}
bootstrap();
