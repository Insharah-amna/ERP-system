import { Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  // POST /enrollments/:studentId/:courseId
  @Post(':studentId/:courseId')
  enroll(
    @Param('studentId') studentId: number,
    @Param('courseId') courseId: number,
  ) {
    return this.enrollmentService.enroll(studentId, courseId);
  }

  // GET /enrollments/student/:id
  @Get('student/:id')
  getStudentCourses(@Param('id') studentId: number) {
    return this.enrollmentService.getStudentCourses(studentId);
  }

  // GET /enrollments/course/:id
  @Get('course/:id')
  getCourseStudents(@Param('id') courseId: number) {
    return this.enrollmentService.getCourseStudents(courseId);
  }

  // DELETE /enrollments/:studentId/:courseId
  @Delete(':studentId/:courseId')
  remove(
    @Param('studentId') studentId: number,
    @Param('courseId') courseId: number,
  ) {
    return this.enrollmentService.removeEnrollment(studentId, courseId);
  }
}
