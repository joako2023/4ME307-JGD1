import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DiagnosticosModule } from './diagnosticos.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(DiagnosticosModule, {
    transport: Transport.TCP,
    options: {
      port: 3010
    }
  });
  await app.listen();
}
bootstrap();
