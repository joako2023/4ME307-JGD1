import { Test, TestingModule } from '@nestjs/testing';
import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';

describe('MailsController', () => {
  let mailsController: MailsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailsController],
      providers: [MailsService],
    }).compile();

    mailsController = app.get<MailsController>(MailsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mailsController.getHello()).toBe('Hello World!');
    });
  });
});
