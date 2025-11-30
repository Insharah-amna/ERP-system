import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { Department } from './departments.entity';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  createDepartment(
    @Body('departmentHead') departmentHead: string,
    @Body('departmentName') departmentName: string,
  ) {
    return this.departmentsService.create(departmentHead, departmentName);
  }

  @Get()
  getAllDepartments() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  getDepartment(@Param('id') id: number) {
    return this.departmentsService.findOne(id);
  }

  @Patch(':id')
  updateDepartment(
    @Param('id') id: number,
    @Body() updatedData: Partial<Department>,
  ) {
    return this.departmentsService.update(id, updatedData);
  }

  @Delete(':id')
  deleteDepartment(@Param('id') id: number) {
    return this.departmentsService.delete(id);
  }
}
