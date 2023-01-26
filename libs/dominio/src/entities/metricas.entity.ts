import { Column, Entity } from "typeorm";
import { isEntity } from './base/isEntity';
@Entity()
export class MetricasEntity extends isEntity{

@Column()
totalNutriologo:number
@Column()
totalPacientes:number
@Column()
totalSuscripciones:number
@Column()
totalSuscripcionesHabilitadas:number
@Column()
totalSuscripcionesDeshabilitadas:number
@Column()
rankedNutriologos:string //esto es un arreglo objeto stringficado

}