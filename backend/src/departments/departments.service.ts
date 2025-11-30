import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './departments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(departmentHead: string, departmentName: string) {
    let department = this.departmentRepository.create({
      departmentHead,
      departmentName,
    });
    if (!department) return { message: 'Department creation failed.' };

    department = await this.departmentRepository.save(department);
    return { message: 'Department created successfully', department };
  }

  async findAll() {
    const departments = await this.departmentRepository.find();
    return departments;
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOne({
      where: { departmentId: id },
    });
  }

  async update(id: number, updatedData: Partial<Department>) {
    await this.departmentRepository.update(id, updatedData);
    return this.findOne(id);
  }

  async delete(id: number) {
    const department = await this.departmentRepository.findOneBy({
      departmentId: id,
    });
    if (!department) return { message: 'Department not found' };

    await this.departmentRepository.delete({ departmentId: id });

    return { message: 'Department deleted successfully' };
  }
}

// const csDepartment = await departmentRepository.findOne({
//   where: { name: 'Computer Science' },
//   relations: ['teachers'], // needs the inverse relation
// });

// console.log(csDepartment.teachers); // array of Teacher objects
