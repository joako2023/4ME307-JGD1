import { MetricasEntity } from "@app/dominio/entities/metricas.entity";
import { Between } from "typeorm";
import { chartAbstractFactory } from "./abstract-factory";

export class lineFactory extends chartAbstractFactory{
    async crearGrafico(metricaNombre:string,options:any) {
        
       
        const fechaFrom:any=this.procesarFecha(options.from)
        const fechaTo:any=this.procesarFechaTo(options.to)
        
        const repo = await this.metricasRepo.find({
        where:{
        created_at:Between(new Date(options.from),
        new Date(options.to),)
        
      }
      
    })
    
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