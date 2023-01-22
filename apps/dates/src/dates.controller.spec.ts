import { Test, TestingModule } from '@nestjs/testing';
import { DatesController } from './dates.controller';
import { DatesService } from './dates.service';

describe('DatesController', () => {
  let datesController: DatesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DatesController],
      providers: [DatesService],
    }).compile();

    datesController = app.get<DatesController>(DatesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(datesController.getHello()).toBe('Hello World!');
    });
  });
});
