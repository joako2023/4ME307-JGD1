import { ServiceBase } from '@app/services/base/service.base';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class ControllerBase<T> {
  protected constructor(
    protected serviceBase: ServiceBase<T>,
    public relations = [] as string[],
  ) {}

  @Get()
  async obtenerTodos() {
    return await this.serviceBase.obtenerTodos({ relations: this.relations });
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: number | string) {
    return await this.serviceBase.obtener({ id } as any);
  }

  @Post() //<-- entry points or end points hace referencia al lugar donde se conectara la aplicación para guardar el dato
  @ApiBody({ type: undefined })
  async guardar(@UploadedFiles() files: any, @Body() body: T) {
    return await this.serviceBase.guardar(body);
  }

  @Put(':id')
  @ApiBody({ type: undefined })
  async actualizar(
    @Param('id') id: number | string,
    @Body() body: QueryDeepPartialEntity<T>,
    @UploadedFiles() files?: any,
  ) {
    const update = await this.serviceBase.actualizar(id, body);
    return await this.obtenerPorId(id);
  }

  @Delete(':id')
  async borrar(@Param('id') id: number | string) {
    return await this.serviceBase.borrar(id);
  }
}
