import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teachers } from './teachers.entity';
import { Users } from 'src/users/users.entity';
import { Department } from 'src/departments/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teachers, Users, Department])],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
