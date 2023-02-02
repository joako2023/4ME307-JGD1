import { Test, TestingModule } from '@nestjs/testing';
import { MetricasController } from './metricas.controller';

describe('MetricasController', () => {
  let controller: MetricasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetricasController],
    }).compile();

    controller = module.get<MetricasController>(MetricasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
