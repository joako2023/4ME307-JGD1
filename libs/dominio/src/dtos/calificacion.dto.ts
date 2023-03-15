import { ApiProperty } from "@nestjs/swagger";
import { Calificacion } from "../entities/calificacion.entity";
import { Nutriologo } from "../entities/nutriologo.entity";
import { Pacientes } from "../entities/pacientes.entity";
import { dates } from '../entities/dates.entity';

export class CalificacionDto extends Calificacion {

    @ApiProperty()
    score: number;

    @ApiProperty()
    commentario?: string;

    @ApiProperty()
    activo: boolean;

    @ApiProperty()
    nutriologo: Nutriologo;

    @ApiProperty()
    paciente: Pacientes;
}