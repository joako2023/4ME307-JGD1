import { MetricasService } from '@app/services/metricas/metricas.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('metricas')
export class MetricasController {
    constructor(
        private metricasService:MetricasService
    ){

    }
    @Get()
    GetMetri(@Query('year') year?:number){
        if (year) {
            return this.metricasService.GetMetricas(Number(year))
        }else{
            return this.metricasService.GET()
        }
            
    }
       

    @Get(':from/:to')
    GetMetricas(@Param('from')from:string, @Param('to')to:string){
        
            return this.metricasService.getFechaMetrica(from,to)
        
        
    }
}
