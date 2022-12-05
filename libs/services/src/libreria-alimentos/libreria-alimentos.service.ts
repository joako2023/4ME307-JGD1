import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LibreriaAlimentos } from '@app/dominio/entities/libreria-alimentos.entity';

@Injectable()
export class LibreriaAlimentosService extends ServiceBase<LibreriaAlimentos> {
  constructor(
    @InjectRepository(LibreriaAlimentos)
    protected repository: Repository<LibreriaAlimentos>,
  ) {
    super(repository);
  }
}
