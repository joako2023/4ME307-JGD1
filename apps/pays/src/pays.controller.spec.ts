import { Test, TestingModule } from '@nestjs/testing';
import { PaysController } from './pays.controller';
import { PaysService } from './pays.service';

describe('PaysController', () => {
  let paysController: PaysController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaysController],
      providers: [PaysService],
    }).compile();

    paysController = app.get<PaysController>(PaysController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paysController.getHello()).toBe('Hello World!');
    });
  });
});
