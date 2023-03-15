import { dates } from '@app/dominio/entities/dates.entity';
import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { isEntity } from './base/isEntity';
import { calendario } from './calendario.entity';
import { Establecimiento } from './establecimiento.entity';
import { Pacientes } from './pacientes.entity';
import { Suscripciones } from './suscripciones.entity';
import { User } from './user.entity';
import { Calificacion } from './calificacion.entity';
import { Diagnosticos } from './diagnostico.entity';

@Entity()
export class Nutriologo extends isEntity {
  @Column({ unique: true, nullable: true })
  public identificacion: string;

  @Column()
  public nombre: string;

  @Column()
  public apellido: string;

  @Column({ nullable: true })
  public nombre_completo: string;

  @Column()
  public telefono: string;

  @Column()
  public email: string;

  @Column()
  public tipo_pago: string;

  @Column()
  public acerca_de_mi: string;

  @Column()
  public especialidad: string;

  @Column()
  public enfermedades_tratadas: string;

  @Column()
  public imagen: string;

  @Column({ default: 5, nullable: true })
  public score?: number;

  @ManyToOne(
    () => Establecimiento,
    (establecimiento) => establecimiento.nutriologos,
  )
  public establecimiento: Establecimiento;

  @OneToOne(() => User, i => i.nutriologo)
  @JoinColumn()
  usuario?: User;

  @OneToOne(() => calendario, i => i.nutriologo)
  @JoinColumn()
  calendario?: calendario;
  
  @OneToOne(() => Suscripciones, (suscripciones) => suscripciones.nutriologo)
  @JoinColumn()
  suscripciones?: Suscripciones;
  
  @OneToMany(() => dates, i => i.medico)
  citas: dates[];

  @OneToMany(() => Calificacion, (c) => c.nutriologo)
  calificaciones: number[];
  
  @OneToMany(() => Diagnosticos, i => i.nutriologo)
  diagnosticos: Diagnosticos[];


  @ManyToMany(() => Pacientes, i => i.nutriologos)
  @JoinTable()
  pacientes?: Pacientes[];
}
