import { Test, TestingModule } from '@nestjs/testing';
import { HistorialPacientesService } from './historial-pacientes.service';

describe('HistorialPacientesService', () => {
  let service: HistorialPacientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialPacientesService],
    }).compile();

    service = module.get<HistorialPacientesService>(HistorialPacientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
