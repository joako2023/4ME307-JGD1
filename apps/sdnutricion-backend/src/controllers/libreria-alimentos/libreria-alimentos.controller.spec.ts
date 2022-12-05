import { Test, TestingModule } from '@nestjs/testing';
import { LibreriaAlimentosController } from './libreria-alimentos.controller';

describe('LibreriaAlimentosController', () => {
  let controller: LibreriaAlimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibreriaAlimentosController],
    }).compile();

    controller = module.get<LibreriaAlimentosController>(LibreriaAlimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
