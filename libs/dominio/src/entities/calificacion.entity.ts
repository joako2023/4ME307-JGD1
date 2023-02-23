import {
    Column,
    Entity,
    ManyToOne,
  } from 'typeorm';
import { isEntity } from './base/isEntity';
import { Pacientes } from './pacientes.entity';
import { Nutriologo } from './nutriologo.entity';

@Entity()
export class Calificacion extends isEntity{

    @Column()
    score: number;

    @Column({nullable:true})
    commentario?: string;

    @Column({default: true})
    activo: boolean;

    @ManyToOne( 
        () => Nutriologo,
        (nutriologo) => nutriologo.calificaciones,
    )
    public nutriologo: Nutriologo;

    @ManyToOne(
        () => Pacientes,
        (pacientes) => pacientes.calificaciones,
    )
    public paciente: Pacientes
}