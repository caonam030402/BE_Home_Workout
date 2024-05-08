import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { WorkoutDto } from './workoutDto';

export class ClassicWorkoutDto {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WorkoutDto)
  list: WorkoutDto[];
}
