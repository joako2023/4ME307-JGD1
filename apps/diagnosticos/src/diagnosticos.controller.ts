import { Diagnosticos } from '@app/dominio/entities/diagnostico.entity';
import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { DiagnosticosService } from './diagnosticos.service';

@Controller()
export class DiagnosticosController {
  constructor(private readonly diagnosticosService: DiagnosticosService) {}

  @MessagePattern({ diag: 'save' })
  async saveDiagnosticos(data: Diagnosticos) {
    return await this.diagnosticosService.saveDiagnostico(data);
  }

  @MessagePattern({ diag: 'update' })
  async updateDiagnosticos(data: Diagnosticos) {
    return await this.diagnosticosService.saveDiagnostico(data);
  }

  @MessagePattern({ diag: 'get-paciente'})
  async getDiagnosticos(data: any) {
    return await this.diagnosticosService.consultarDiagnosticos(data.idPaciente,data.idMedico);
  }
}
