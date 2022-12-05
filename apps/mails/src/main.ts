import { NestFactory } from '@nestjs/core';
import { MailsModule } from './mails.module';

async function bootstrap() {
  const app = await NestFactory.create(MailsModule);
  await app.listen(3003);
}
bootstrap();
