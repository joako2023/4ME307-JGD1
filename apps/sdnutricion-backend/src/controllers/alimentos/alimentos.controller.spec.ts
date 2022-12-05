import { Test, TestingModule } from '@nestjs/testing';
import { AlimentosController } from './alimentos.controller';

describe('AlimentosController', () => {
  let controller: AlimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentosController],
    }).compile();

    controller = module.get<AlimentosController>(AlimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
