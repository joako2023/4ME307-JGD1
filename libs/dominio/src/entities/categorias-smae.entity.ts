import { Column, Entity } from 'typeorm';
import { isEntity } from './base/isEntity';

@Entity()
export class CategoriasSmae extends isEntity {
  @Column()
  nombre: string;
}
