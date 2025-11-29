import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
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

  async addUser(email: string, password: string, role: string) {
    const newUser = this.usersRepository.create({ email, password, role });
    await this.usersRepository.save(newUser);

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
