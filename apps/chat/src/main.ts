import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ChatModule } from './chat.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ChatModule, {
      transport: Transport.TCP,
      options: {
        port: 3011
      }
    }
  );
  await app.listen()
}
bootstrap();
