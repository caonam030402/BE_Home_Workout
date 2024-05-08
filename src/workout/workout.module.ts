import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClassicWorkout,
  ClassicWorkoutSchema,
  Exercise,
  ExerciseSchema,
  Workout,
  WorkoutSchema,
} from './schema/workout.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Workout.name, schema: WorkoutSchema },
      { name: ClassicWorkout.name, schema: ClassicWorkoutSchema },
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
