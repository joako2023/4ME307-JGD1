import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { isEntity } from "./base/isEntity";
import { Nutriologo } from "./nutriologo.entity";

@Entity()
export class calendario extends isEntity {

    @Column({ nullable: true, type: 'text'})
    daysOut: string;

    @Column({ nullable: true, default: '20'})
    timeDates: string; // 30 min -> 40 min -> 60 min
    
    @Column({ type: 'text', nullable:true })
    horario: string;

    @OneToOne(() => Nutriologo, i => i.calendario)
    nutriologo: Nutriologo;
}