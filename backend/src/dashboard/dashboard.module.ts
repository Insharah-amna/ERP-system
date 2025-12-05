import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Student } from 'src/students/students.entity';
import { Teachers } from 'src/teachers/teachers.entity';
import { Courses } from 'src/courses/courses.entity';
import { Department } from 'src/departments/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Teachers, Courses, Department])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
