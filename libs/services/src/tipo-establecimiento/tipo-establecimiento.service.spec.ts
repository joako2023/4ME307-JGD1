import { Test, TestingModule } from '@nestjs/testing';
import { TipoEstablecimientoService } from './tipo-establecimiento.service';

describe('TipoEstablecimientoService', () => {
  let service: TipoEstablecimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoEstablecimientoService],
    }).compile();

    service = module.get<TipoEstablecimientoService>(TipoEstablecimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
