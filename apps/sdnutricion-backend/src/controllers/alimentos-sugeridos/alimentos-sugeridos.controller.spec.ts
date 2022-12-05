import { Test, TestingModule } from '@nestjs/testing';
import { AlimentosSugeridosController } from './alimentos-sugeridos.controller';

describe('AlimentosSugeridosController', () => {
  let controller: AlimentosSugeridosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentosSugeridosController],
    }).compile();

    controller = module.get<AlimentosSugeridosController>(AlimentosSugeridosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
