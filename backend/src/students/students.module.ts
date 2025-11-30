import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { Users } from 'src/users/users.entity';
import { Department } from 'src/departments/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Users, Department])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
