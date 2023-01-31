import { MetricasEntity } from "@app/dominio/entities/metricas.entity";
import { Abstract, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


export abstract class chartAbstractFactory{


    constructor(
       protected  metricasRepo:Repository<MetricasEntity>
    ){}

    abstract crearGrafico():any;


}