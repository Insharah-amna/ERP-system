/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class AddStudentDto {
  @IsString()
  fullName!: string;

  @IsString()
  email: string;

  @IsString()
  rollNumber: string;

  @IsNumber()
  departmentId: number;

  @IsString()
  enrollmentYear: number;
}

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsNumber()
  departmentId?: number;

  @IsOptional()
  @IsNumber()
  semester?: number;
}
