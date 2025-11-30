import {
  Controller,
  Param,
  Body,
  Post,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { UpdateTeacherDto } from './teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  createTeacher(
    @Body('email') email: string,
    @Body('fullName') fullName: string,
    @Body('departmentId') departmentId: number,
  ) {
    return this.teachersService.create(email, fullName, departmentId);
  }

  @Get()
  getAllTeachers() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  getTeacher(@Param('id') id: number) {
    return this.teachersService.findOne(id);
  }

  @Patch(':id')
  updateTeacher(
    @Param('id') id: number,
    @Body() updatedData: UpdateTeacherDto,
  ) {
    return this.teachersService.update(id, updatedData);
  }

  @Delete(':id')
  deleteTeacher(@Param('id') id: number) {
    return this.teachersService.delete(id);
  }
}
