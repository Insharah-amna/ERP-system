import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teachers } from './teachers.entity';
import { Department } from 'src/departments/departments.entity';
import { Users } from 'src/users/users.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teachers)
    private readonly teacherRepository: Repository<Teachers>,
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(email: string, fullName: string, departmentId: number) {
    const dept = await this.departmentRepository.findOne({
      where: { departmentId },
    });

    if (!dept) return { message: 'User not added. Department field is null.' };

    // User record creation
    const user = this.userRepository.create({
      email,
      role: 'teacher',
    });
    await this.userRepository.save(user);

    if (!user) return { message: 'Corresponding user creation failed.' };

    // Teacher record creation
    const teacher = this.teacherRepository.create({
      email,
      fullName,
      department: dept,
      user,
    });
    if (!teacher) return { message: 'Teacher creation failed.' };

    return await this.teacherRepository.save(teacher);
  }

  async findAll() {
    const teachers = await this.teacherRepository.find({
      relations: ['department', 'user'],
    });
    return teachers;
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOne({
      where: { teacherId: id },
      relations: ['department', 'user'],
    });
  }

  async update(id: number, updatedData: Partial<Teachers>) {
    await this.teacherRepository.update(id, updatedData);
    return this.findOne(id); // return updated teacher
  }

  async delete(id: number) {
    const teacher = await this.teacherRepository.findOne({
      where: { teacherId: id },
      relations: ['user'],
    });
    if (!teacher) return { message: 'Teacher not found' };

    const userId = teacher.user?.userId;

    await this.teacherRepository.delete({ teacherId: id });
    if (userId) await this.userRepository.delete({ userId });

    return { message: 'Teacher and user deleted successfully' };
  }
}
