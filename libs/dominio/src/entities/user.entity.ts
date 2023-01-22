import { Column, Entity, OneToOne } from 'typeorm';
import { isEntity } from './base/isEntity';
import { Nutriologo } from './nutriologo.entity';

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

  @Column()
  telefono: string;

  @Column() // --> ROLES: ADMIN, NUTRIOLOGO, PACIENTE, COLABORADOR
  rol: string;

  @OneToOne(() => Nutriologo, i => i.usuario)
  nutriologo: Nutriologo;
}
