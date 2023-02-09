import { chartFactory } from '@app/factorys/charts/chart-factory';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Any } from 'typeorm';

@Controller('charts')
export class ChartsController {
    constructor(  protected chart: chartFactory) {
        
      }
    

    @Get(':type/:metricaNombre/:from/:to')
    traerGrafica(@Param('type') type:string, @Param('metricaNombre') metricaNombre:string, @Param('from') from:string, @Param('to') to:string) {
        return this.chart.crearFabrica(type).crearGrafico(metricaNombre,{from,to});
    }
}
