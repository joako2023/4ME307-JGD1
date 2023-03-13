import { CalificacionDto } from './../../../dominio/src/dtos/calificacion.dto';
import { NutriologoService } from '@app/services/nutriologo/nutriologo.service';
import { Calificacion } from './../../../dominio/src/entities/calificacion.entity';
import { ServiceBase } from './../base/service.base';
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class CalificacionService extends ServiceBase<Calificacion>{

    constructor(
        @InjectRepository(Calificacion) protected repository: Repository<Calificacion>,
        private nutService: NutriologoService
    ) {
        super(repository);
    }

    async create(cal: CalificacionDto){
        const cals:any = cal;

        if(cal.nutriologo){
            cals.nutriologo = await this.nutService.obtener(cals.nutriologo);
        }

        if(!cals.paciente){
            throw new ConflictException("No se encontro paciente");
        }

       const cali:any = this.repository.create(cals)

        let data = await  this.repository.save(cali);
        return await this.calculateScore(cali, data);
        
        
    }

    async consultarCalNutriologo(id: number){
        return await this.repository.find({
            relations: ['paciente'],
            where: {
                nutriologo: {
                    id
                }
            },
            take: 5,
            order: {
                id: 'DESC'
            }  
        });
    }

    async consultantPatientDoctor( idp: number, idm: number){
        return await this.repository.count({
            where: {
                paciente: {
                    id: idp
                },
                nutriologo: {
                    id: idm
                }
            }
        });
    }

    async calculateScore(cal:Calificacion, data: any){
        if(!cal.nutriologo){
            throw new NotFoundException("nutruiologo not found")
        }
            
        const cali = await this.repository.find(
            {
                where:{nutriologo:{id: cal.nutriologo.id}}
            });

        let score = 0 ;

        if(cali.length >= 5){
            cali.forEach(ca => score+= ca.score)
            score = score/cali.length;
            return await this.nutService.actualizar(cal.nutriologo.id, cal.nutriologo);
        } 
        let nut: any;
        nut = cal.nutriologo;
        
        //return await this.nutService.obtener(nut);
        await this.nutService.obtener(nut);
        return data;
    }
}