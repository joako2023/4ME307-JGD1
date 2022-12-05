import { Test, TestingModule } from '@nestjs/testing';
import { HistorialPacientesController } from './historial-pacientes.controller';

describe('HistorialPacientesController', () => {
  let controller: HistorialPacientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialPacientesController],
    }).compile();

    controller = module.get<HistorialPacientesController>(HistorialPacientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
