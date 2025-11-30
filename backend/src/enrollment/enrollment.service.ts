import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './enrollment.entity';
import { Student } from 'src/students/students.entity';
import { Courses } from 'src/courses/courses.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,

    @InjectRepository(Student)
    private studentRepository: Repository<Student>,

    @InjectRepository(Courses)
    private courseRepository: Repository<Courses>,
  ) {}

  async enroll(studentId: number, courseId: number) {
    const student = await this.studentRepository.findOne({
      where: { studentId },
    });
    if (!student) return { message: 'Student not found' };

    const course = await this.courseRepository.findOne({
      where: { courseId },
    });
    if (!course) return { message: 'Course not found' };

    // Check if already enrolled
    const existing = await this.enrollmentRepository.findOne({
      where: { student, course },
    });
    if (existing) return { message: 'Student already enrolled in this course' };

    const enrollment = this.enrollmentRepository.create({ student, course });
    return await this.enrollmentRepository.save(enrollment);
  }

  // Get all courses of a student
  async getStudentCourses(studentId: number) {
    return await this.enrollmentRepository.find({
      where: { student: { studentId } },
      relations: ['course'],
    });
  }

  // Get all students enrolled in a course
  async getCourseStudents(courseId: number) {
    return await this.enrollmentRepository.find({
      where: { course: { courseId } },
      relations: ['student'],
    });
  }

  // Unenroll a student from a course
  async removeEnrollment(studentId: number, courseId: number) {
    const result = await this.enrollmentRepository.delete({
      student: { studentId },
      course: { courseId },
    });

    if (result.affected === 0)
      return { message: 'Enrollment not found or already removed' };

    return { message: 'Unenrolled successfully' };
  }
}
