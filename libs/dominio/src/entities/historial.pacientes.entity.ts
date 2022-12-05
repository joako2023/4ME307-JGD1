import { Column, Entity } from 'typeorm';
import { PacientesBase } from './pacientes.base';
@Entity()
export class HistorialPacientes extends PacientesBase {
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public fecha?: Date;
}
