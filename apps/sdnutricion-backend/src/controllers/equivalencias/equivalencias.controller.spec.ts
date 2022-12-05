import { Test, TestingModule } from '@nestjs/testing';
import { EquivalenciasController } from './equivalencias.controller';

describe('EquivalenciasController', () => {
  let controller: EquivalenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquivalenciasController],
    }).compile();

    controller = module.get<EquivalenciasController>(EquivalenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
