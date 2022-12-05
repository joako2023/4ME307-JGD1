import { Nutriologo } from '@app/dominio/entities/nutriologo.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Establecimiento } from '@app/dominio/entities/establecimiento.entity';
import { User } from '@app/dominio/entities/user.entity';
import { Suscripciones } from '@app/dominio/entities/suscripciones.entity';
import { Pacientes } from '@app/dominio/entities/pacientes.entity';

export class NutriologoDto extends Nutriologo {
  @ApiProperty()
  public identificacion: number;

  @ApiProperty()
  public nombre: string;

  @ApiProperty()
  public apellido: string;

  @ApiProperty()
  public telefono: string;

  @ApiProperty()
  public email: string;

  @ApiProperty()
  public tipo_pago: string;

  @ApiProperty()
  public acerca_de_mi: string;

  @ApiProperty()
  public especialidad: string;

  @ApiProperty()
  public enfermedades_tratadas: string;

  @ApiProperty()
  public imagen: string;

  @ApiProperty()
  public establecimiento: Establecimiento;

  @ApiProperty()
  usuario?: User;

  @ApiProperty()
  suscripciones?: Suscripciones;

  @ApiProperty()
  pacientes?: Pacientes[];
}
