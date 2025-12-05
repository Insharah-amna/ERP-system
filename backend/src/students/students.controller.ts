import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { AddStudentDto, UpdateStudentDto } from './student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  createStudent(@Body() studentData: AddStudentDto) {
    return this.studentsService.create(studentData);
  }

  @Get()
  getAllStudents() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  getStudent(@Param('id') id: number) {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  updateStudent(
    @Param('id') id: number,
    @Body() updatedData: UpdateStudentDto,
  ) {
    return this.studentsService.update(id, updatedData);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studentsService.delete(id);
  }

  @Get('user/:userId')
  async getStudentByUser(@Param('userId') userId: number) {
    return await this.studentsService.findByUserId(userId);
  }
}
