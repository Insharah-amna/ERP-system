import { Courses } from 'src/courses/courses.entity';
import { Teachers } from 'src/teachers/teachers.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('course_assignments')
export class CourseAssignment {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  assignedAt: Date;

  @ManyToOne(() => Teachers, (teacher) => teacher.courseAssignments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'teacherId' }) // FK column
  teacher: Teachers;

  @ManyToOne(() => Courses, (course) => course.courseAssignments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' }) // FK column
  course: Courses;
}
