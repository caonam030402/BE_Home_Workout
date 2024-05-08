import { IsString, IsNumber, IsArray } from 'class-validator';

export class ExerciseDto {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsNumber()
  fitTime: number;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsString()
  video: string;

  @IsString()
  description: string;
}
