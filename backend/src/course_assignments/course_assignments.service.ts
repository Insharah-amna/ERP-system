import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseAssignment } from './course_assignments.entity';
import { Teachers } from 'src/teachers/teachers.entity';
import { Courses } from 'src/courses/courses.entity';

@Injectable()
export class CourseAssignmentsService {
  constructor(
    @InjectRepository(CourseAssignment)
    private assignmentRepo: Repository<CourseAssignment>,

    @InjectRepository(Teachers)
    private teacherRepo: Repository<Teachers>,

    @InjectRepository(Courses)
    private courseRepo: Repository<Courses>,
  ) {}

  async create(teacherId: number, courseId: number) {
    const teacher = await this.teacherRepo.findOne({
      where: { teacherId },
    });
    if (!teacher) return { message: 'Teacher not found' };

    const course = await this.courseRepo.findOne({
      where: { courseId },
    });
    if (!course) return { message: 'Course not found' };

    const assignment = this.assignmentRepo.create({
      teacher,
      course,
    });
    return await this.assignmentRepo.save(assignment);
  }

  async findAll() {
    return this.assignmentRepo.find({
      relations: ['teacher', 'course'],
    });
  }

  async findOne(id: number) {
    return this.assignmentRepo.findOne({
      where: { id },
      relations: ['teacher', 'course'],
    });
  }

  async delete(id: number) {
    const assignment = await this.assignmentRepo.findOneBy({ id });
    if (!assignment) return { message: 'Course assignment not found' };

    await this.assignmentRepo.remove(assignment);
    return { message: 'Course assignment deleted successfully' };
  }
}
