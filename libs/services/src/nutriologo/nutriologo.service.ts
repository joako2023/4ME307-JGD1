import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Establecimiento } from "@app/dominio/entities/establecimiento.entity";

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
}
