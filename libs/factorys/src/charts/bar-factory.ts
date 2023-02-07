import { MetricasEntity } from "@app/dominio/entities/metricas.entity";
import { Inject, Injectable } from "@nestjs/common";
import { Between } from "typeorm";
import { chartAbstractFactory } from "./abstract-factory";

export class barFactory extends chartAbstractFactory{
   



    async crearGrafico(metricaNombre:string,options:any) {
      const fechaFrom:any=this.procesarFecha(options.from)
      const fechaTo:any=this.procesarFecha(options.to)
      
      const repo = await this.metricasRepo.find({select:[metricaNombre as keyof MetricasEntity],
        where:{
        created_at:Between(fechaFrom,fechaTo)
      }})
       const dataRepo=repo.map(r=>(r[metricaNombre]))
         //return repo
       const config={
        data:  {
          datasets: [
            {
              label: metricaNombre,
              data: dataRepo
            }
           
          ]
        }
       }
       
        return config
    
    }


}