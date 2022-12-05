import { Test, TestingModule } from '@nestjs/testing';
import { LibreriaAlimentosService } from './libreria-alimentos.service';

describe('LibreriaAlimentosService', () => {
  let service: LibreriaAlimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibreriaAlimentosService],
    }).compile();

    service = module.get<LibreriaAlimentosService>(LibreriaAlimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
