import { dates } from '@app/dominio/entities/dates.entity';
import { Diagnosticos } from '@app/dominio/entities/diagnostico.entity';
import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

@Injectable()
export class DiagnosticosService {

  constructor(
    @InjectRepository(Diagnosticos) private repo: Repository<Diagnosticos>,
    @InjectRepository(dates) private repoDates: Repository<dates>,
    @InjectRepository(Pacientes) private repoPacientes: Repository<Pacientes>,
    @InjectRepository(Nutriologo) private repoNutriologo: Repository<Nutriologo>
  ) {

  }

  async saveDiagnostico(data: Diagnosticos) {
    // actualizar información actual del paciente
    let paciente = await this.repoPacientes.findOne({
      where: {
        id: data.cita.paciente.id
      }
    });
    const medico = await this.repoNutriologo.findOne({
      relations: ['pacientes'],
      where: {
        id: data.nutriologo.id
      }
    })
    const contienePaciente = medico?.pacientes?.some(i => i.id === data.cita.paciente.id);
    if (!contienePaciente) {
      medico.pacientes.push(data.cita.paciente);
      await this.repoNutriologo.save(medico);
    }
    const salida = plainToClass(Pacientes, data) as any;
    salida.id = paciente.id;
    delete salida.cita;
    delete salida.edad;
    delete salida.nutriologo;
    delete salida.tipoForm;
    try {
      await this.repoPacientes.update(paciente.id, salida);
      //guardar el antecendente para el nutriologo
      let saved = await this.repo.save(data);
      await this.repoDates.update(data.cita.id, { state: 'TERMINADO' })
      return saved;
    } catch (error) {
      return { error: 'Ya este diagnostico fue guardado' }
    }
  }

  async consultarDiagnosticos(id: number, idMedico: number) {
    return await this.repo.find({
      where: {
        cita: {
          paciente: {
            id: id
          },
        },
        nutriologo: {
          id: idMedico
        }
      }
    });
  }

  actualizarDiagnosticos() { }
}
