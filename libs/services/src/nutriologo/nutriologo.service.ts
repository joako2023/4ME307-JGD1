import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Establecimiento } from "@app/dominio/entities/establecimiento.entity";
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { NutriologoDto } from '@app/dominio/dtos/nutriologo.dto';

@Injectable()
export class NutriologoService extends ServiceBase<Nutriologo> {
  constructor(
    @InjectRepository(Nutriologo) protected repository: Repository<Nutriologo>,
    @InjectRepository(Establecimiento) private establecimientoRepository: Repository<Establecimiento>
  ) {
    super(repository);
  }

  async guardar(data: Nutriologo) {
    data.establecimiento = await this.establecimientoRepository.save(data.establecimiento);
    return await this.repository.save(data);
  }

  async consultarConFiltro(query: any, relations: string[]){
    return this.repository.find({
      relations,
      where: [
        { nombre_completo: Like('%' + query + '%') },
        { establecimiento: {
          ciudad: Like('%' + query + '%')
        } },
        { establecimiento: {
          nombre: Like('%' + query + '%')
        } },
      ]
    });
  }

  async consultarPorId(query: any, relations: string[]){
    return this.repository.findOne({
      relations,
      where:{
        id: query
      }
    });
  }

  async actualizar(id: number | string, data: QueryDeepPartialEntity<NutriologoDto>) {
    const old = await this.repository.findOne({
      where: {
        id: +id
      }
    });
    if(data.imagen.length > 0) {
      let imagen = old.imagen.split(',');
      await this.deletePhoto([...imagen]);
    }
    if(data.establecimiento) {
      data.establecimiento = await this.establecimientoRepository.save({ ...data.establecimiento });
    }
    console.log(old, data);
    return await this.repository.update(id, data);
  }  
}
