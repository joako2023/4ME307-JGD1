import { Test, TestingModule } from '@nestjs/testing';
import { UploadedsController } from './uploadeds.controller';

describe('UploadedsController', () => {
  let controller: UploadedsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadedsController],
    }).compile();

    controller = module.get<UploadedsController>(UploadedsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
