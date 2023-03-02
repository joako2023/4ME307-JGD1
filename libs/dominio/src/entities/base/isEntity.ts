import { BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class isEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: false, default: true })
  active: boolean;

  @UpdateDateColumn()
  update_at?: Date;

 @CreateDateColumn()
  created_at?: Date;
}
