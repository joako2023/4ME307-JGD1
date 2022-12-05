import { Column, Entity } from 'typeorm';
import { isEntity } from './base/isEntity';

@Entity()
export class TipoEstablecimiento extends isEntity {
  @Column()
  public nombre: string;
}
