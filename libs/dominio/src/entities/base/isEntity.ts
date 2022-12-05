import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class isEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ nullable: false, default: true })
  active: boolean;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  update_at?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at?: Date;
}
