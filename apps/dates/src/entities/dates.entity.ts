import { Nutriologo } from "@app/dominio/entities/nutriologo.entity";
import { Pacientes } from "@app/dominio/entities/pacientes.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class dates {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true })
    day: string;

    @Column({ nullable: true })
    month: string;

    @Column({ nullable: true })
    hour: string;

    @Column({ nullable: true })
    year: string;

    @Column({ default: 'AGENDADO' }) // CANCELADO - CONFIRMADO
    state: string;

    @ManyToOne(() => Nutriologo, i => i.citas)
    medico: Nutriologo;

    @ManyToOne(() => Pacientes, i => i.citas)
    paciente: Pacientes;
}