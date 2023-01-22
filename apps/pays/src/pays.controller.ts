import { Controller, Get } from '@nestjs/common';
import { PaysService } from './pays.service';

@Controller()
export class PaysController {
  constructor(private readonly paysService: PaysService) {}

  @Get()
  getHello(): string {
    return this.paysService.getHello();
  }
}
