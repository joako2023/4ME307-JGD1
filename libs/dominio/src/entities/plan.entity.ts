import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { isEntity } from './base/isEntity';
import { Servicios } from './servicios.entity';
import { Suscripciones } from './suscripciones.entity';

@Entity()
export class Plan extends isEntity {
  @Column()
  nombre: string;
  @Column()
  descripcion: string;

  @Column({ nullable: false, default: 1 })
  duracion?: number;

  @Column({ nullable: true })
  precio: number;

  @Column({ nullable: false, default: 0 })
  precioOld: number;

  @Column({ nullable: true })
  mesesSinPago?: number;

  @OneToMany(() => Suscripciones, (suscripciones) => suscripciones.plan, {
    nullable: true,
  })
  suscripciones?: Suscripciones[];

  @ManyToMany(() => Servicios, {nullable: true})
  @JoinTable()
  servicios?: Servicios[];
}
