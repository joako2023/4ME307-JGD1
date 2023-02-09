import { MetricasEntity } from "@app/dominio/entities/metricas.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { chartAbstractFactory } from "./abstract-factory";
import { barFactory } from "./bar-factory";
import { donutFactory } from "./donut-factory";
import { lineFactory } from "./line-factory";

@Injectable()
export class chartFactory {

    constructor(
        @InjectRepository(MetricasEntity) protected metriRepo: Repository<MetricasEntity>,
        
    ) { }

    crearFabrica(type: string):chartAbstractFactory {
        switch (type) {
            case "barra":
                return new barFactory(this.metriRepo)

                break;
            case "donut":
                return new donutFactory(this.metriRepo)
                break;
            case "line":
                return new lineFactory(this.metriRepo)
                break;

            default:
                return new lineFactory(this.metriRepo)
                break;
        }
    }
}