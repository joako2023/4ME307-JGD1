import {
  Column,
  Entity,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { isEntity } from './base/isEntity';
import { Nutriologo } from './nutriologo.entity';
import { Plan } from './plan.entity';

@Entity()
export class Suscripciones extends isEntity {
  @Column()
  fechaInicio: Date;

  @Column({ nullable: true })
  fechaExpiracion?: Date;

  @Column({ nullable: true })
  duracion: number;

  @Column()
  precioPlan: number;

  @Column({ nullable: false })
  pago: number;

  @Column({ nullable: true })
  mesesSinPago?: number;

  @Column({ nullable: true })
  fechaExpiracionSinPago?: Date;

  @Column({ default: 'ACTIVO' })
  estado: string;

  @ManyToOne(() => Plan, (plan) => plan.suscripciones, { nullable: true })
  plan?: Plan;

  @OneToOne(() => Nutriologo, (nutriologos) => nutriologos.suscripciones, {
    nullable: true,
  })
  nutriologo?: Nutriologo;
  
  @BeforeInsert()
  @BeforeUpdate()
  async actualizarFechaFinal() {
    if (this.duracion) {
      this.fechaExpiracion = new Date(this.fechaInicio);
      this.fechaExpiracion.setMonth(
        this.fechaInicio.getMonth() + this.duracion,
      );
    }
    if (this.mesesSinPago) {
      this.fechaExpiracionSinPago = new Date(this.fechaInicio);
      this.fechaExpiracionSinPago.setMonth(
        this.fechaInicio.getMonth() + this.mesesSinPago,
      );
    }
  }
}
