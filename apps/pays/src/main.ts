import { NestFactory } from '@nestjs/core';
import { PaysModule } from './pays.module';

async function bootstrap() {
  const app = await NestFactory.create(PaysModule);
  await app.listen(3000);
}
bootstrap();
