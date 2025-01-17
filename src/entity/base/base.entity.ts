import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 'system' })
  createdBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: 'system' })
  updatedBy: string;
}
