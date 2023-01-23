import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { mails } from './entities/mail.entity';
import { MailsService } from './mails.service';
import { successTemplate } from './templates/success.template';

@Controller()
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @EventPattern({send:'enviar'})
  async mailExecute(mail: mails) {
    try {
      return await this.mailsService.execute(mail);
    } catch (error) {
      return { error: error.message };
      
    }
  }


  @EventPattern({send:'success'})
  async success(mail: mails) {
    try {
      mail.html=successTemplate(mail.text)
      return await this.mailsService.execute(mail);
    } catch (error) {
      return { error: error.message };
      
    }
  }
}
