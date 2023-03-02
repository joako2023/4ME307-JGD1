import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { MailsModule } from './mails.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MailsModule, {
   transport: Transport.TCP, options: {
    port: 3005
   }
  });
  await app.listen();
}
bootstrap();
