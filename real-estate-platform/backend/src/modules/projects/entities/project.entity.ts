import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PurchaseGroup } from '../../purchase-groups/entities/purchase-group.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalInvestment: number;

  @Column('decimal', { precision: 10, scale: 2 })
  minimumInvestment: number;

  @Column()
  status: string; // 'planning', 'active', 'completed', 'cancelled'

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  imageUrl: string;

  @Column('json', { nullable: true })
  features: string[];

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  expectedReturn: number;

  @OneToMany(() => PurchaseGroup, purchaseGroup => purchaseGroup.project)
  purchaseGroups: PurchaseGroup[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

