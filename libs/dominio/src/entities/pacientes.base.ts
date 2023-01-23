import { Column, OneToOne, JoinColumn } from 'typeorm';
import { isEntity } from '@app/dominio/entities/base/isEntity';
import { User } from '@app/dominio/entities/user.entity';

export class PacientesBase extends isEntity {
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

  @OneToOne(() => User)
  @JoinColumn()
  usuario?: User;
}
