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
    @Body('password') password: string,
    @Body('role') role: string,
  ) {
    return this.usersService.addUser(email, password, role);
  }

  @Put(':email')
  updateUser(
    @Param('email') email: string,
    @Body('password') password: string,
  ) {
    return this.usersService.updateUser(password, email);
  }

  @Delete(':email')
  deleteUser(@Param('email') email: string) {
    return this.usersService.deleteUser(email);
  }
}
