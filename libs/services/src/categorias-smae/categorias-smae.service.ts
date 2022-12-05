import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@app/services/base/service.base';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriasSmae } from '@app/dominio/entities/categorias-smae.entity';

@Injectable()
export class CategoriasSmaeService extends ServiceBase<CategoriasSmae> {
  constructor(
    @InjectRepository(CategoriasSmae)
    protected repository: Repository<CategoriasSmae>,
  ) {
    super(repository);
  }
}
