import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { DatesService } from './dates.service';
import { dates } from './entities/dates.entity';

@Controller()
export class DatesController {
  constructor(private readonly datesService: DatesService) {}

  @MessagePattern({ dates: 'guardar' })
  async agendarCita(data: dates) {
    return await this.datesService.save(data);
  }
}
