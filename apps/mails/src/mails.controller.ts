import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { mails } from './entities/mail.entity';
import { MailsService } from './mails.service';
import { failesTemplate } from './templates/failes.template';
import { normalTemplate } from './templates/normal.template';
import { passwordTemplate } from './templates/password.templates';
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


  @EventPattern({send:'enviar-template'})
  async template(data: any) {
    try {
      switch (data.template) {
        case 'success':
          data.mail.html = successTemplate(data.mail.text);
          break;
        case 'failes':
          data.mail.html = failesTemplate(data.mail.text);
          break;  
        case 'normal':
          data.mail.html = normalTemplate(data.mail.text, data.mail.subject);
          break;
        case 'password':
          data.mail.html = passwordTemplate(data.mail.text, data.mail.subject);
          break;  
      }
      return await this.mailsService.execute(data.mail);
    } catch (error) {
      return { error: error.message };
    }
  }
}
