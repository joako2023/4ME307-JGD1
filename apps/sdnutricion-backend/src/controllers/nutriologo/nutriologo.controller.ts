import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { NutriologoDto } from '@app/dominio/dtos/nutriologo.dto';
import { NutriologoService } from '@app/services/nutriologo/nutriologo.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as uuid from 'uuid';
import { diskStorage } from 'multer';
import { ApiBody } from '@nestjs/swagger';

@Controller('nutriologo')
export class NutriologoController extends ControllerBase<NutriologoDto> {
  constructor(protected service: NutriologoService) {
    super(service, [
      'establecimiento',
      'suscripciones',
      'usuario',
      'pacientes',
    ]);
  }

  @Post() //<-- entry points or end points hace referencia al lugar donde se conectara la aplicación para guardar el dato
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'photo', maxCount: 1 }], {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(
            null,
            uuid.v4().split('-')[0] +
            Date.now() +
            '.' +
            file.mimetype.split('/')[1],
          );
        },
      }),
    }),
  )
  async guardar(
    @UploadedFiles()
    files: {
      photo?: Express.Multer.File[];
    },
    @Body() body: any,
  ) {
    body.id = JSON.parse(body.id);
    if (files.photo) {
      files.photo.forEach((i, index) => {
        body.imagen += i.filename + (files.photo.length === index + 1 ? '' : ',');
      });
    }
    return await this.serviceBase.guardar(body);
  }

  @Put(':id')
  @ApiBody({ type: undefined })
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'photo', maxCount: 1 }], {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(
            null,
            uuid.v4().split('-')[0] +
            Date.now() +
            '.' +
            file.mimetype.split('/')[1],
          );
        },
      }),
    }),
  )
  async actualizar(
    @Param('id') id: number | string,
    @Body() body: any,
    @UploadedFiles() files: {
      photo?: Express.Multer.File[]
    },
  ) {
    for(const datakey in body) {
      body[datakey] = JSON.parse(body[datakey]);
    }
    if (files.photo) {
      files.photo.forEach((i, index) => {
        body.imagen += i.filename + (files.photo.length === index + 1 ? '' : ',');
      });
    }
    const update = await this.serviceBase.actualizar(id, body);
    return await this.obtenerPorId(id);
  }
}
