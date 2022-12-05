import { Entity, ManyToOne } from 'typeorm';
import { Nutriologo } from './nutriologo.entity';
import { PacientesBase } from './pacientes.base';

// EJECUTAR CONSULTA in mysql ALTER TABLE Pacientes ROW_FORMAT=DYNAMIC; evita error Row size too large
@Entity()
export class Pacientes extends PacientesBase {
  @ManyToOne(() => Nutriologo, (t) => t.pacientes)
  nutriologo: Nutriologo;
}
