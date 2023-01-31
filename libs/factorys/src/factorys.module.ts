import { DominioModule } from '@app/dominio';
import { MetricasEntity } from '@app/dominio/entities/metricas.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { chartFactory } from './charts/chart-factory';
import { FactorysService } from './factorys.service';

@Module({
  providers: [FactorysService,chartFactory],
  exports: [FactorysService, chartFactory],
  imports:[DominioModule,TypeOrmModule.forFeature([MetricasEntity])]
})
export class FactorysModule {}
