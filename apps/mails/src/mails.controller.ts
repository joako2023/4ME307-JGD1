import { Controller, Get } from '@nestjs/common';
import { MailsService } from './mails.service';

@Controller()
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @Get()
  getHello(): string {
    return this.mailsService.getHello();
  }
}
