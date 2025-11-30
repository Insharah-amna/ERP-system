import { Module } from '@nestjs/common';
import { CourseAssignmentsService } from './course_assignments.service';
import { CourseAssignmentsController } from './course_assignments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseAssignment } from './course_assignments.entity';
import { Teachers } from 'src/teachers/teachers.entity';
import { Courses } from 'src/courses/courses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseAssignment, Teachers, Courses])],
  controllers: [CourseAssignmentsController],
  providers: [CourseAssignmentsService],
})
export class CourseAssignmentsModule {}
