import { NestFactory } from '@nestjs/core';
import { UserRegistrationsModule } from './user-registrations.module';

async function bootstrap() {
  const app = await NestFactory.create(UserRegistrationsModule);
  await app.listen(3000);
}
bootstrap();
