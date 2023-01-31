import { chartFactory } from '@app/factorys/charts/chart-factory';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Any } from 'typeorm';

@Controller('charts')
export class ChartsController {
    constructor(  protected chart: chartFactory) {
        
      }
    

    @Get(':type')
    traerGrafica(@Param('type') type:string) {
        return this.chart.crearFabrica(type).crearGrafico();
    }
}
