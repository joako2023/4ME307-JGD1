import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { payments } from './entities/payments.entity';
import { PaysService } from './pays.service';

@Controller()
export class PaysController {
  constructor(private readonly paysService: PaysService) {}

  @MessagePattern({ pays: 'stp-intent' })
  async generatePaymentIntent(data: Partial<payments>) {
    return await this.paysService.generatePaymentIntent(data);
  }
}
