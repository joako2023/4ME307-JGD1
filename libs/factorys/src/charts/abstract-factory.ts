import { MetricasEntity } from "@app/dominio/entities/metricas.entity";
import { Repository } from "typeorm";


export abstract class chartAbstractFactory {


    constructor(

        protected metricasRepo: Repository<MetricasEntity>
    ) { }

    abstract crearGrafico(metricaNombre: string, options: any): any;

    public procesarFecha(fecha: string) {
        let fechaNew = fecha.split('-')
        
        return new Date(+fechaNew[0], +fechaNew[1] - 1, +fechaNew[2]).setHours(0,0,0,0)
    }
    public procesarFechaTo(fecha: string) {
        let fechaNew = fecha.split('-')
        
        return new Date(+fechaNew[0], +fechaNew[1] - 1, +fechaNew[2]).setHours(23,59,59,0)
    }



}