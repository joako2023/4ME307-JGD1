import { Controller, Get } from '@nestjs/common';
import { CronsService } from './crons.service';

@Controller()
export class CronsController {
  constructor(private readonly cronsService: CronsService) {}

  @Get()
  getHello(): string {
    return this.cronsService.getHello();
  }
}
