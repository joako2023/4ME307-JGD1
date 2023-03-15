import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn()
  send_at?: Date;

  @Column({ default: '' }) // el mensaje se vera reflejado con el archivo que se tiene
  message: string;

  @Column({ default: '' })
  for: string;

  @Column({ default: '' })
  from: string;

  @Column({ default: '' })
  group: string;

  @Column({ default: 'TEXT' })
  type: string; // FILE - TEXT - IMAGE
}