import { Test, TestingModule } from '@nestjs/testing';
import { NutriologoService } from './nutriologo.service';

describe('NutriologoService', () => {
  let service: NutriologoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutriologoService],
    }).compile();

    service = module.get<NutriologoService>(NutriologoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
