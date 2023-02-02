import { MetricasService } from '@app/services/metricas/metricas.service';
import { Controller, Get } from '@nestjs/common';

@Controller('metricas')
export class MetricasController {
    constructor(
        private metricasService:MetricasService
    ){

    }

    @Get()
    GetMetricas(){
        return this.metricasService.GET()
    }
}
