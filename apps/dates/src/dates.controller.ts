import { Controller, Get } from '@nestjs/common';
import { DatesService } from './dates.service';

@Controller()
export class DatesController {
  constructor(private readonly datesService: DatesService) {}

  @Get()
  getHello(): string {
    return this.datesService.getHello();
  }
}
