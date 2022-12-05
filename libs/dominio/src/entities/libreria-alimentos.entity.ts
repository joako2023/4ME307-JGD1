import { Column, Entity } from 'typeorm';
import { isEntity } from './base/isEntity';

@Entity()
export class LibreriaAlimentos extends isEntity {
  @Column()
  public nombre: string;
}
