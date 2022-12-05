import { Test, TestingModule } from '@nestjs/testing';
import { TipoEstablecimientoController } from './tipo-establecimiento.controller';

describe('TipoEstablecimientoController', () => {
  let controller: TipoEstablecimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoEstablecimientoController],
    }).compile();

    controller = module.get<TipoEstablecimientoController>(TipoEstablecimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
