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

  @MessagePattern({dates: 'reagendar'})
  async reagendarCita(data: any){
    let dataOld: dates = data[0];
    let dataNew: dates = data[1];

    try{
      return await this.datesService.updateSchedule(dataOld, dataNew);
    }catch (error) {
      return { error: error.message };
    }
  }

  @MessagePattern({dates: 'eliminar'})
  async eliminarCita(id: number | string){
    try{
      return await this.datesService.deletedate(id);
    }catch (error) {
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

  @MessagePattern({ dates: 'filtro-paciente-medico' })
  async consultarCitasPacienteMedico(data: any){
    try {
      console.log('idP : ' + data.idP + 'idM: '  + data.idM);
      return await this.datesService.consultarCitasPacienteMedico(data.idP, data.idM);
      
    } catch (error){
      return { error: error.message };
    }
  }
}
