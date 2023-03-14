import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticosController } from './diagnosticos.controller';
import { DiagnosticosService } from './diagnosticos.service';

describe('DiagnosticosController', () => {
  let diagnosticosController: DiagnosticosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosticosController],
      providers: [DiagnosticosService],
    }).compile();

    diagnosticosController = app.get<DiagnosticosController>(DiagnosticosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(diagnosticosController.getHello()).toBe('Hello World!');
    });
  });
});
