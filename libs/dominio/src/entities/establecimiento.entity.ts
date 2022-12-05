import { Column, Entity, OneToMany } from 'typeorm';
import { isEntity } from './base/isEntity';
import { Nutriologo } from './nutriologo.entity';

@Entity()
export class Establecimiento extends isEntity {
  @Column()
  public nit_establecimiento: string;

  @Column()
  public nombre: string;

  @Column()
  public direccion: string;

  @Column()
  public ciudad: string;

  @Column()
  mapUrl: string;

  @Column()
  public tipo_establecimiento: string;

  @OneToMany(() => Nutriologo, (nutriologo) => nutriologo.establecimiento)
  public nutriologos?: Nutriologo[];
}
