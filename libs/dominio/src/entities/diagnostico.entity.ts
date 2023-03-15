import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { isEntity } from "./base/isEntity";
import { dates } from "./dates.entity";
import { Nutriologo } from "./nutriologo.entity";

@Entity()
export class Diagnosticos extends isEntity {

    @Column({ type: 'text', nullable: true })
    public datos_personales: string;

    @Column({ type: 'text', nullable: true })
    public datos_socio_economicos: string;

    @Column({ type: 'text', nullable: true })
    public antecedentes: string;

    @Column({ type: 'text', nullable: true })
    public antecedentes_edad: string;

    @Column({ type: 'text', nullable: true })
    public historial_alimentario: string;

    @Column({ type: 'text', nullable: true })
    public recordatorio: string;

    @Column({ type: 'text', nullable: true })
    public frecuencia_alimentos: string;

    @Column({ type: 'text', nullable: true })
    public antropometria: string;

    @Column({ type: 'text', nullable: true })
    public evaluacion_bioquimica: string;

    @Column({ nullable: true })
    public nacimiento: Date;

    @Column({ nullable: true })
    public fecha_consulta: Date;

    @Column({ nullable: true })
    public sexo: string;

    @Column({ nullable: true })
    public embarazada: boolean;

    @Column({ nullable: true })
    tipoForm: string;

    @Column({ nullable: true })
    edad: string;

    @Column({ nullable: true })
    nombres: string;

    @Column({ nullable: true })
    apellidos: string;

    @Column({ nullable: true})
    identificacion: string;

    @OneToOne(() => dates)
    @JoinColumn()
    cita: dates;

    @ManyToOne(() => Nutriologo, i => i.diagnosticos)
    nutriologo: Nutriologo;
}