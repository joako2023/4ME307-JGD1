import { Test, TestingModule } from '@nestjs/testing';
import { NutriologoController } from './nutriologo.controller';

describe('NutriologoController', () => {
  let controller: NutriologoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutriologoController],
    }).compile();

    controller = module.get<NutriologoController>(NutriologoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
