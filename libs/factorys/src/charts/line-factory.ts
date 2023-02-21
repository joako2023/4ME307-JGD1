import { MetricasEntity } from "@app/dominio/entities/metricas.entity";
import { Between } from "typeorm";
import { chartAbstractFactory } from "./abstract-factory";

export class lineFactory extends chartAbstractFactory{
    async crearGrafico(metricaNombre:string,options:any) {
        
       
        const fechaFrom:any=this.procesarFecha(options.from)
        const fechaTo:any=this.procesarFecha(options.to)
        
        const repo = await this.metricasRepo.find({select:[metricaNombre as keyof MetricasEntity, "created_at"],
          where:{
          created_at:Between(fechaFrom,fechaTo)
        }})
         const dataRepo=repo.map(r=>(r[metricaNombre]))
         
         const labelRepo=repo.map(r=>{
          const formatedFecha= new Date(r['created_at'])
          const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(formatedFecha);
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