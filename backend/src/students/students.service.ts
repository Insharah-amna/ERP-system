import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './students.entity';
import { Department } from 'src/departments/departments.entity';
import { Users } from 'src/users/users.entity';
import { AddStudentDto } from './student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(studentData: AddStudentDto) {
    const dept = await this.departmentRepository.findOne({
      where: { departmentId: studentData.departmentId },
    });

    if (!dept) return { message: 'User not added. Department field is null.' };

    // User record creation
    let user = this.userRepository.create({
      email: studentData.email,
      role: 'student',
    });
    user = await this.userRepository.save(user);

    if (!user) return { message: 'Corresponding user creation failed.' };

    // Student record creation
    const student = this.studentRepository.create({
      email: studentData.email,
      fullName: studentData.fullName,
      rollNumber: studentData.rollNumber,
      department: dept,
      enrollmentYear: studentData.enrollmentYear,
      user,
    });

    if (!student) return { message: 'Student creation failed.' };

    return await this.studentRepository.save(student);
  }

  async findAll() {
    const students = await this.studentRepository.find();
    return students;
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({ where: { studentId: id } });
  }

  async update(id: number, updatedData: Partial<Student>) {
    await this.studentRepository.update(id, updatedData);
    return this.findOne(id); // return updated student
  }

  async delete(id: number) {
    const student = await this.studentRepository.findOne({
      where: { studentId: id },
      relations: ['user'],
    });
    if (!student) return { message: 'Student not found' };

    const userId = student.user?.userId;

    await this.studentRepository.delete({ studentId: id });
    if (userId) await this.userRepository.delete({ userId });

    return { message: 'Student and user deleted successfully' };
  }
}
