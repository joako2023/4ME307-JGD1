import { MetricasEntity } from "@app/dominio/entities/metricas.entity";
import { Inject, Injectable } from "@nestjs/common";
import { Between } from "typeorm";
import { chartAbstractFactory } from "./abstract-factory";

export class barFactory extends chartAbstractFactory{
   



    async crearGrafico(metricaNombre:string,options:any) {
      
       
      const fechaFrom:any=this.procesarFecha(options.from)
      const fechaTo:any=this.procesarFecha(options.to)
      
      const repo = await this.metricasRepo.find({select:[metricaNombre as keyof MetricasEntity, "created_at"],
        where:{
        created_at:Between(fechaFrom,fechaTo)
      }})
       const dataRepo=repo.map(r=>(r[metricaNombre]))
       console.log(dataRepo)
       const labelRepo=repo.map(r=>{
        const formatedFecha= new Date(r['created_at'])
        const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(formatedFecha);
        console.log(formatedFecha)
        return formattedDate
       } )
         //return repo
       const config={
        data:  {
          labels:labelRepo,
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