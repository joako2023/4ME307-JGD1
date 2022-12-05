import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionesQuimicasController } from './evaluaciones-quimicas.controller';

describe('EvaluacionesQuimicasController', () => {
  let controller: EvaluacionesQuimicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluacionesQuimicasController],
    }).compile();

    controller = module.get<EvaluacionesQuimicasController>(EvaluacionesQuimicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
