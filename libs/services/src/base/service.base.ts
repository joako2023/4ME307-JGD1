import {
  DeleteResult,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import * as fs from 'fs';

export class ServiceBase<T> {
  constructor(protected repository: Repository<T>) {}

  async guardar(data: T) {
    return await this.repository.save(data);
  }

  async obtenerTodos(option?: FindManyOptions<T>) {
    return await this.repository.find(option);
  }

  async obtener(options: FindOptionsWhere<T>): Promise<T> {
    return await this.repository.findOneBy(options);
  }

  async actualizar(
    id: number | string,
    data: QueryDeepPartialEntity<T>,
  ): Promise<any> {
    return await this.repository.update(id, data);
  }

  async borrar(id: number | string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }

  getRepo() {
    return this.repository;
  }

  async deletePhoto(image: string[] ) {
    try {
      image.forEach(element => {
        fs.unlinkSync('./uploads/' + element);
      });
    } catch (error) {
      if (error.code === "ENOENT") {
        return true
      }

    }
  }
}
