import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CourseAssignmentsService } from './course_assignments.service';

@Controller('course-assignments')
export class CourseAssignmentsController {
  constructor(private readonly service: CourseAssignmentsService) {}

  @Post()
  create(
    @Body('teacherId') teacherId: number,
    @Body('courseId') courseId: number,
  ) {
    return this.service.create(teacherId, courseId);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
