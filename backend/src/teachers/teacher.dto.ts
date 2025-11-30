/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  fullName!: string;

  @IsString()
  email: string;

  @IsNumber()
  departmentId: number;
}

export class UpdateTeacherDto {
  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsNumber()
  departmentId?: number;
}
