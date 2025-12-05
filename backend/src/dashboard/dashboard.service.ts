import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/courses/courses.entity';
import { Department } from 'src/departments/departments.entity';
import { Student } from 'src/students/students.entity';
import { Teachers } from 'src/teachers/teachers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,

    @InjectRepository(Teachers)
    private teacherRepo: Repository<Teachers>,

    @InjectRepository(Courses)
    private courseRepo: Repository<Courses>,

    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,
  ) {}

  async getStats() {
    const [students, teachers, courses, departments] = await Promise.all([
      this.studentRepo.count(),
      this.teacherRepo.count(),
      this.courseRepo.count(),
      this.departmentRepo.count(),
    ]);

    return {
      students,
      teachers,
      courses,
      departments,
    };
  }
}
