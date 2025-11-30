/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  courseName: string;

  @IsNumber()
  creditHours: number;

  @IsNumber()
  departmentId: number;

  @IsNumber()
  semester: number;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
