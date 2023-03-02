import { dates } from 'apps/dates/src/entities/dates.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Nutriologo } from './nutriologo.entity';
import { PacientesBase } from './pacientes.base';

// EJECUTAR CONSULTA in mysql ALTER TABLE Pacientes ROW_FORMAT=DYNAMIC; evita error Row size too large
@Entity()
export class Pacientes extends PacientesBase {

  @Column({ nullable: true })
  image?: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({ nullable: true })
  identificacion: string;

  @ManyToOne(() => Nutriologo, (t) => t.pacientes)
  nutriologo: Nutriologo;
  
  @OneToMany(() => dates, i => i.paciente)
  citas: dates;
}
