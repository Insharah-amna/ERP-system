import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from './courses.entity';
import { Department } from 'src/departments/departments.entity';
import { CreateCourseDto, UpdateCourseDto } from './courses.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses)
    private courseRepository: Repository<Courses>,
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const dept = await this.departmentRepository.findOne({
      where: { departmentId: createCourseDto.departmentId },
    });
    if (!dept) return { message: 'Department not found' };

    let course = this.courseRepository.create({
      courseName: createCourseDto.courseName,
      creditHours: createCourseDto.creditHours,
      semester: createCourseDto.semester,
      department: dept,
    });

    course = await this.courseRepository.save(course);
    return { message: 'Course created successfully.', course };
  }

  findAll() {
    return this.courseRepository.find({
      order: { courseId: 'ASC' },
      relations: ['department'],
    });
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({
      where: { courseId: id },
      relations: ['department'],
    });
    if (!course) return { message: `Course with id ${id} not found` };
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.findOne({
      where: { courseId: id },
      relations: ['department'],
    });

    if (!course) return { message: 'Course not found' };

    if (updateCourseDto.departmentId) {
      const dept = await this.departmentRepository.findOne({
        where: { departmentId: updateCourseDto.departmentId },
      });

      if (!dept) return { message: 'Department not found' };
      course.department = dept;
    }

    course.courseName = updateCourseDto.courseName ?? course.courseName;
    course.creditHours = updateCourseDto.creditHours ?? course.creditHours;
    course.semester = updateCourseDto.semester ?? course.semester;
    return await this.courseRepository.save(course);
  }

  async remove(id: number) {
    const result = await this.courseRepository.delete(id);
    if (result.affected === 0)
      return { message: `Course with id ${id} not found` };

    return { message: 'Course deleted successfully' };
  }
}
