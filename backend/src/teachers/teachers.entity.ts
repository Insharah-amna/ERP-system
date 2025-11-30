import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Department } from 'src/departments/departments.entity';
import { Users } from 'src/users/users.entity';
import { CourseAssignment } from 'src/course_assignments/course_assignments.entity';

@Entity('teachers')
export class Teachers {
  @PrimaryGeneratedColumn()
  teacherId: number;

  @Column({ unique: true })
  email: string;

  @Column()
  fullName: string;

  // Relation to Department
  @ManyToOne(() => Department)
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  // Relation to User
  @OneToOne(() => Users)
  @JoinColumn({ name: 'userId' }) // FK in teachers table
  user: Users;

  @OneToMany(() => CourseAssignment, (assignment) => assignment.teacher)
  courseAssignments: CourseAssignment[];
}
