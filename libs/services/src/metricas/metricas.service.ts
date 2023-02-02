import { MetricasEntity } from '@app/dominio/entities/metricas.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';
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
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            }).slice(0, 9)
        }else{
            rankedNutriologos=[]
        }
        const totalPacientes = await this.pacientesRepository.count()
        const totalSuscripciones = await this.suscripcionesRepository.count()
        const totalSuscripcionesHabilitadas = await this.suscripcionesRepository.count({ where: { estado: 'ACTIVO' } })
        const totalSuscripcionesDeshabilitadas = await this.suscripcionesRepository.count({ where: { estado: 'INACTIVO' } })
        rankedNutriologos = JSON.stringify(rankedNutriologos)
        return { totalNutriologo: totalNutriologo.length, totalPacientes, totalSuscripciones, totalSuscripcionesDeshabilitadas, totalSuscripcionesHabilitadas, rankedNutriologos }

    }

    async configMetricas() {
        const metricas = await this.metricasRepository.find()
       const  metrica = await this.GetMetricas()
        if (metricas.length === 0) {
            
        const createRegistro = this.metricasRepository.create(metrica)
        await this.metricasRepository.save(createRegistro)
        }
        const fusion= this.metricasRepository.merge(metricas[0],metrica)
         await this.metricasRepository.update(metricas[0].id,fusion)
    }

    async GET(){
       const metrica:any=await this.metricasRepository.findOne({where:{id:1}})
       metrica.rankedNutriologos=JSON.parse(metrica.rankedNutriologos)  
       return metrica  
    }


    @Cron(CronExpression.EVERY_DAY_AT_1AM)
    async actualizacionDiaria(){
        await this.configMetricas()
        console.log('cronjob metricas activado')
    }
    
}
