import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from './courses.entity';
import { Department } from 'src/departments/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Courses, Department])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
