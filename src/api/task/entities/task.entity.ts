import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;
}
