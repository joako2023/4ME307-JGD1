import { NestFactory } from '@nestjs/core';
import { DatesModule } from './dates.module';

async function bootstrap() {
  const app = await NestFactory.create(DatesModule);
  await app.listen(3000);
}
bootstrap();
