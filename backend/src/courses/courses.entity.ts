import { CourseAssignment } from 'src/course_assignments/course_assignments.entity';
import { Department } from 'src/departments/departments.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('courses')
export class Courses {
  @PrimaryGeneratedColumn()
  courseId: number;

  @Column()
  courseName: string;

  @Column()
  creditHours: number;

  @Column()
  semester: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Department, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'departmentId', referencedColumnName: 'departmentId' })
  department: Department;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.course)
  enrollments: Enrollment[];

  @OneToMany(() => CourseAssignment, (assignment) => assignment.course)
  courseAssignments: CourseAssignment[];
}
