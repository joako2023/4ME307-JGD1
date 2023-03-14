import { Calificacion } from './calificacion.entity';
import { dates } from '@app/dominio/entities/dates.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Nutriologo } from './nutriologo.entity';
import { PacientesBase } from './pacientes.base';
import { User } from './user.entity';

// EJECUTAR CONSULTA in mysql ALTER TABLE Pacientes ROW_FORMAT=DYNAMIC; evita error Row size too large
@Entity()
export class Pacientes extends PacientesBase {

  @Column({ nullable: true })
  image?: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column({ nullable: true, unique: true })
  identificacion: string;
  
  @OneToMany(() => dates, i => i.paciente)
  citas: dates;

  @OneToMany(() => Calificacion, (c) => c.paciente)
  calificaciones: number[];

  @OneToOne(() => User, i => i.paciente)
  @JoinColumn()
  usuario?: User;

  @ManyToMany(() => Nutriologo, i => i.pacientes)
  nutriologos?: Nutriologo[];
}
