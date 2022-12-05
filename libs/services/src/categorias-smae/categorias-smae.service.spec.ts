import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasSmaeService } from './categorias-smae.service';

describe('CategoriasSmaeService', () => {
  let service: CategoriasSmaeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasSmaeService],
    }).compile();

    service = module.get<CategoriasSmaeService>(CategoriasSmaeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
