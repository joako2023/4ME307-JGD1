import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionesQuimicasService } from './evaluaciones-quimicas.service';

describe('EvaluacionesQuimicasService', () => {
  let service: EvaluacionesQuimicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluacionesQuimicasService],
    }).compile();

    service = module.get<EvaluacionesQuimicasService>(EvaluacionesQuimicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
