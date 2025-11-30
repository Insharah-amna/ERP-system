import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/students.entity';
import { Enrollment } from './enrollment.entity';
import { Courses } from 'src/courses/courses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enrollment, Student, Courses])],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
})
export class EnrollmentModule {}
