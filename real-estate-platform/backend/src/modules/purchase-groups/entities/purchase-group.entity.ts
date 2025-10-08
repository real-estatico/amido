import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity('purchase_groups')
export class PurchaseGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  organizerName: string;

  @Column()
  organizerEmail: string;

  @Column()
  organizerPhone: string;

  @Column('decimal', { precision: 10, scale: 2 })
  targetAmount: number;

  @Column('decimal', { precision: 10, scale: 2 })
  currentAmount: number;

  @Column()
  status: string; // 'recruiting', 'active', 'completed', 'cancelled'

  @Column()
  deadline: Date;

  @Column({ nullable: true })
  imageUrl: string;

  @Column('json', { nullable: true })
  benefits: string[];

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  discountPercentage: number;

  @ManyToOne(() => Project, project => project.purchaseGroups)
  @JoinColumn({ name: 'projectId' })
  project: Project;

  @Column()
  projectId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}


