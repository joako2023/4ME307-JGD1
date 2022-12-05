import { Column, Entity } from 'typeorm';
import { isEntity } from './base/isEntity';

@Entity()
export class EvaluacionesQuimicas extends isEntity {
  @Column()
  public minimo: number;

  @Column()
  public maximo: number;

  @Column()
  public nombre: string;
}
