import { dates } from '@app/dominio/entities/dates.entity';
import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { DatesService } from './dates.service';

@Controller()
export class DatesController {
  constructor(private readonly datesService: DatesService) {}

  @MessagePattern({ dates: 'guardar' })
  async agendarCita(data: dates) {
    try {
      return await this.datesService.save(data);
    } catch (error) {
      return { error: error.message };
      
    }
  }

  @MessagePattern({ dates: 'horas-citas' })   
  async consultarFechas(data: any){
    try {
      console.log(data);
        return await this.datesService.crearHorasDeCita(+data.id, data.fecha);
      
    } catch (error){
      return { error: error.message };
    }
  }

  @MessagePattern({ dates: 'citas-medico' })
  async consultarCitasMedico(data: any) {
    return await this.datesService.consultarCitasMedico(data.id);
  }

  @MessagePattern({ dates: 'citas-paciente' })
  async consultarCitasPaciente(data: any){
    return await this.datesService.consultarCitasPaciente(data.id);
  }
}
