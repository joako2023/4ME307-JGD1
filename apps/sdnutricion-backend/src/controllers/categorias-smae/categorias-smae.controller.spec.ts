import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasSmaeController } from './categorias-smae.controller';

describe('CategoriasSmaeController', () => {
  let controller: CategoriasSmaeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasSmaeController],
    }).compile();

    controller = module.get<CategoriasSmaeController>(CategoriasSmaeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
