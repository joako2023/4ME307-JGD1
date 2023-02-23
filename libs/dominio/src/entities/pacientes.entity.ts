import { Calificacion } from './calificacion.entity';
import { dates } from 'apps/dates/src/entities/dates.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Nutriologo } from './nutriologo.entity';
import { PacientesBase } from './pacientes.base';

// EJECUTAR CONSULTA in mysql ALTER TABLE Pacientes ROW_FORMAT=DYNAMIC; evita error Row size too large
@Entity()
export class Pacientes extends PacientesBase {
  @ManyToOne(() => Nutriologo, (t) => t.pacientes)
  nutriologo: Nutriologo;
  
  @OneToMany(() => dates, i => i.paciente)
  citas: dates;

  @OneToMany(() => Calificacion, (c) => c.paciente)
  calificaciones: number[];
}
