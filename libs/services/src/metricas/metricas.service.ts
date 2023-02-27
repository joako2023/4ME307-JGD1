import { MetricasEntity } from '@app/dominio/entities/metricas.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as moment from 'moment';
@Injectable()
export class MetricasService {

    constructor(
        @InjectRepository(MetricasEntity) protected metricasRepository: Repository<MetricasEntity>,
        @InjectRepository(Nutriologo) protected nutriologoRepository: Repository<Nutriologo>,
        @InjectRepository(Pacientes) protected pacientesRepository: Repository<Pacientes>,
        @InjectRepository(Suscripciones) protected suscripcionesRepository: Repository<Suscripciones>,
        
    ) {

    }

    async GetMetricas() {
        let rankedNutriologos: any
        const totalNutriologo = await this.nutriologoRepository.find()
        if (totalNutriologo.length>0) {
           rankedNutriologos = totalNutriologo.sort((a: Nutriologo, b: Nutriologo) => {
                var textA = a.score;
                var textB = b.score;
                return (textA > textB) ? -1 : (textA > textB) ? 1 : 0;
            }).slice(0, 9)
        }else{
            rankedNutriologos=[]
        }
        
        const totalPacientes = await this.pacientesRepository.count()
        const totalSuscripciones = await this.suscripcionesRepository.count()
        let sumPago:number=0
        const PagoSuscripciones= await this.suscripcionesRepository.find({select:['pago']})
        
        if (PagoSuscripciones.length>0) {
             sumPago = PagoSuscripciones.reduce((acumulador, valorActual) => acumulador + valorActual.pago, 0);
             
        }
        const totalSuscripcionesHabilitadas = await this.suscripcionesRepository.count({ where: { estado: 'ACTIVO' } })
        const totalSuscripcionesDeshabilitadas = await this.suscripcionesRepository.count({ where: { estado: 'INACTIVO' } })
        rankedNutriologos = JSON.stringify(rankedNutriologos)
        return { totalNutriologo: totalNutriologo.length, totalPacientes, totalSuscripciones, totalSuscripcionesDeshabilitadas, totalSuscripcionesHabilitadas,sumPago, rankedNutriologos }

    }

    async configMetricas() {
        const metricas = await this.metricasRepository.find()
       const  metrica = await this.GetMetricas()
        if (metricas.length === 0) {
            
        const createRegistro = this.metricasRepository.create(metrica)
        await this.metricasRepository.save(createRegistro)
        }
         await this.metricasRepository.save(metrica)
      
    } 

    async GET(){
       const metrica:any=await this.metricasRepository.find()
       const actualMetrica:any=metrica.pop()
       actualMetrica.rankedNutriologos=JSON.parse(actualMetrica.rankedNutriologos)  
       return actualMetrica  
    }

async getFechaMetrica(from:string, to:string){
const fromFecha= new Date(moment(from).set('hours',0).set('minutes',0).set('seconds',0).set('milliseconds',0).utcOffset(0, true).format()) 
const toFecha=new Date(moment(to).set('hours',23).set('minutes',59).set('seconds',59).set('milliseconds',999).utcOffset(0, true).format())

const metri= await this.metricasRepository.find(
    {
        
        where:{
        created_at:Between(fromFecha,toFecha)
    }}
)
if (metri.length=0) {
    return undefined
}else{
    return metri
}




}





    @Cron(CronExpression.EVERY_DAY_AT_1AM)
    async actualizacionDiaria(){
        await this.configMetricas()
        console.log('cronjob metricas activado')
    }
    
}
