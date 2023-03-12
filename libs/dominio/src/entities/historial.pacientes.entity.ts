import { Column, Entity, UpdateDateColumn } from 'typeorm';
import { Pacientes } from './pacientes.entity'
@Entity()
export class HistorialPacientes extends Pacientes {
  @UpdateDateColumn()
  public fecha?: Date;
}
