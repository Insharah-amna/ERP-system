import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  departmentId: number;

  @Column()
  departmentName: string;

  @Column()
  departmentHead: string;
}
