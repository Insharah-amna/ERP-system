import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
// import { Student } from 'src/students/students.entity';
// import { Teachers } from 'src/teachers/teachers.entity';
// import { Department } from 'src/departments/departments.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    // @InjectRepository(Student) private studentsRepository: Repository<Student>,
    // @InjectRepository(Teachers)
    // private teachersRepository: Repository<Teachers>,
    // @InjectRepository(Department)
    // private departmentRepository: Repository<Department>,
  ) {}

  getAllUsers() {
    const users = this.usersRepository.find();
    return users;
  }

  async getSingleUser(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) throw new Error('User not found');
    return user;
  }

  async addUser(
    email: string,
    // password: string,
    role: string,
    // fullName: string,
    // rollNumber: string,
    // departmentId: number,
    // course: string,
    // enrollmentYear: number,
  ) {
    const newUser = this.usersRepository.create({ email, role });
    await this.usersRepository.save(newUser);

    // const deptEntity = await this.departmentRepository.findOne({
    //   where: { departmentId },
    // });

    // if (!deptEntity)
    //   return { message: 'User not added. Department field is null.' };

    // if (newUser.role === 'student') {
    //   const student = this.studentsRepository.create({
    //     email,
    //     fullName,
    //     rollNumber,
    //     department: deptEntity,
    //     enrollmentYear,
    //   });

    //   if (!student) return { message: 'User {student} creation failed.' };
    // }

    // if (newUser.role === 'teacher') {
    //   const teacher = this.teachersRepository.create({
    //     email,
    //     fullName,
    //     course,
    //     department: deptEntity,
    //   });

    //   if (!teacher) return { message: 'User {teacher} creation failed.' };
    // }

    return { message: 'User added successfully', user: newUser };
  }

  async updateUser(email: string, password: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      return { message: 'User not found' };
    }
    user.password = password;
    await this.usersRepository.save(user);

    return { message: 'User info updated successfully', user };
  }

  async deleteUser(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      return { message: 'User not found' };
    }

    await this.usersRepository.delete(email);
    return { message: `User with email ${email} is deleted successfully.` };
  }
}
