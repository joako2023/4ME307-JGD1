import { Module } from '@nestjs/common';
import { ControllerBase } from './controller-base';


@Module({
  exports: [ControllerBase],
  controllers: [],
})
export class ControllerModule {}
