import { Department } from 'src/departments/departments.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import { Users } from 'src/users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  studentId: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  rollNumber: string;

  @Column({ default: 1 })
  semester: number;

  @Column()
  enrollmentYear: number;

  // Relation to User
  @OneToOne(() => Users)
  @JoinColumn({ name: 'userId' })
  user: Users;

  // Relation to Department
  @ManyToOne(() => Department)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments: Enrollment[];
}
