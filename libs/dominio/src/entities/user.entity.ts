import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne } from 'typeorm';
import { isEntity } from './base/isEntity';
import { Nutriologo } from './nutriologo.entity';
import * as bcrypt from 'bcrypt';
import { Pacientes } from './pacientes.entity';

@Entity()
export class User extends isEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  confirmed: boolean;

  @Column({ nullable: true })
  telefono: string;

  @Column() // --> ROLES: ADMIN, NUTRIOLOGO, PACIENTE, COLABORADOR
  rol: string;

  @OneToOne(() => Nutriologo, i => i.usuario)
  nutriologo: Nutriologo;

  @OneToOne(() => Pacientes, i => i.usuario)
  paciente: Pacientes;

}
