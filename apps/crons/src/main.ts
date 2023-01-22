import { NestFactory } from '@nestjs/core';
import { CronsModule } from './crons.module';

async function bootstrap() {
  const app = await NestFactory.create(CronsModule);
  await app.listen(3000);
}
bootstrap();
