import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ExerciseDto } from './exerciseDto';

export class WorkoutDto {
  @IsString()
  title: string;

  @IsString()
  level: string;

  @IsString()
  image: string;

  @IsString()
  time: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExerciseDto)
  exercises: ExerciseDto[];
}
