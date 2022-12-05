import { Test, TestingModule } from '@nestjs/testing';
import { AlimentosSugeridosService } from './alimentos-sugeridos.service';

describe('AlimentosSugeridosService', () => {
  let service: AlimentosSugeridosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentosSugeridosService],
    }).compile();

    service = module.get<AlimentosSugeridosService>(AlimentosSugeridosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
