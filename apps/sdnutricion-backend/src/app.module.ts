import { Module } from '@nestjs/common';
import { DominioModule } from '@app/dominio';
import { ServicesModule } from '@app/services';
import { ControllersModule } from './controllers/controllers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DominioModule, ControllersModule, AuthModule],
})
export class AppModule {}
