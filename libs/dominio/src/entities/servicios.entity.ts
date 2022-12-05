import { Column, Entity, ManyToMany } from 'typeorm';
import { isEntity } from './base/isEntity';
import { Plan } from './plan.entity';

@Entity()
export class Servicios extends isEntity {
  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToMany((t) => Plan, (t) => t.servicios)
  planes: Plan[];
}
