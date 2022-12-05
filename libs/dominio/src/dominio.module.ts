import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VARCONNECTION } from '@app/dominio/constants';

@Module({
  imports: [TypeOrmModule.forRoot(VARCONNECTION)],
})
export class DominioModule {}
