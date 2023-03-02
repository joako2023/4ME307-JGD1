import { Column, Entity, UpdateDateColumn } from 'typeorm';
import { PacientesBase } from './pacientes.base';
@Entity()
export class HistorialPacientes extends PacientesBase {
  @UpdateDateColumn()
  public fecha?: Date;
}
