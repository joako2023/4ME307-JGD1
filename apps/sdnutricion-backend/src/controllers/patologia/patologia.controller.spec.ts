import { Test, TestingModule } from '@nestjs/testing';
import { PatologiaController } from './patologia.controller';

describe('PatologiaController', () => {
  let controller: PatologiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatologiaController],
    }).compile();

    controller = module.get<PatologiaController>(PatologiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
