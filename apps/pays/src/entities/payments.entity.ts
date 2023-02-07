import { isEntity } from "@app/dominio/entities/base/isEntity";
import { Column, Entity } from "typeorm";

@Entity()
export class payments extends isEntity {

    @Column({ nullable: true })
    transaction: string;

    @Column({ type: 'text'})
    description: string;

    @Column({ nullable: true })
    serviceType: string; // => SUSCRIPCIONES, PLANES Y OTROS

    @Column({ nullable: true })
    quantity: number;

    @Column({ nullable: true })
    codigoService: number;

    @Column({ nullable: true })
    currency: string;

    @Column({ nullable: false, default: 'PENDIENTE'}) // COMPLETADO
    status: string;

    @Column({ nullable: false })
    userCode: number;
}