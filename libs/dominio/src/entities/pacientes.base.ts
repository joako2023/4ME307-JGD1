import { Column, OneToOne, JoinColumn } from 'typeorm';
import { isEntity } from '@app/dominio/entities/base/isEntity';
import { User } from '@app/dominio/entities/user.entity';

export class PacientesBase extends isEntity {
  @Column({ type: 'text', nullable: true })
  public datos_personales: object;

  @Column({ type: 'text', nullable: true })
  public datos_socio_economicos: object;

  @Column({ type: 'text', nullable: true })
  public antecedentes: object;

  @Column({ type: 'text', nullable: true })
  public antecedentes_edad: object;

  @Column({ type: 'text', nullable: true })
  public historial_alimentario: object;

  @Column({ type: 'text', nullable: true })
  public recordatorio: object;

  @Column({ type: 'text', nullable: true })
  public frecuencia_alimentos: object;

  @Column({ type: 'text', nullable: true })
  public antropometria: object;

  @Column({ type: 'text', nullable: true })
  public evaluacion_bioquimica: object;

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
