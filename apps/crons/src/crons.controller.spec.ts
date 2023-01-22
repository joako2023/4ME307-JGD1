import { Test, TestingModule } from '@nestjs/testing';
import { CronsController } from './crons.controller';
import { CronsService } from './crons.service';

describe('CronsController', () => {
  let cronsController: CronsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CronsController],
      providers: [CronsService],
    }).compile();

    cronsController = app.get<CronsController>(CronsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cronsController.getHello()).toBe('Hello World!');
    });
  });
});
