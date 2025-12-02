import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':email')
  getSingleUser(@Param('email') email: string) {
    return this.usersService.getSingleUser(email);
  }

  @Post()
  addUser(
    @Body('email') email: string,
    @Body('role') role: string,
    // @Body('password') password: string,
    // @Body('fullName') fullName: string,
    // @Body('rollNumber') rollNumber: string,
    // @Body('departmentId') departmentId: number,
    // @Body('course') course: string,
    // @Body('enrollmentYear') enrollmentYear: number,
  ) {
    return this.usersService.addUser(
      email,
      role,
      // password,
      // fullName,
      // rollNumber,
      // departmentId,
      // course,
      // enrollmentYear,
    );
  }

  @Put(':email')
  updateUser(
    @Param('email') email: string,
    @Body('password') password: string,
  ) {
    return this.usersService.updateUser(password, email);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
