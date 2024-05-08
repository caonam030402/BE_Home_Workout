import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClassicWorkout, Exercise, Workout } from './schema/workout.schema';
import { Model } from 'mongoose';

export enum WorkoutType {
  classic = 'classic',
  workout = 'workout',
  exercise = 'exercise',
}

@Injectable()
export class WorkoutService {
  constructor(
    @InjectModel(ClassicWorkout.name)
    private classicWorkoutModel: Model<ClassicWorkout>,

    @InjectModel(Workout.name)
    private workoutModel: Model<Workout>,

    @InjectModel(Exercise.name)
    private exerciseModel: Model<Exercise>,
  ) {}

  async findAll(type: WorkoutType) {
    if (type == WorkoutType.classic) {
      return this.classicWorkoutModel
        .find()
        .populate({
          path: 'list',
          populate: {
            path: 'exercises',
            model: 'Exercise',
          },
        })
        .exec();
    }
    if (type == WorkoutType.exercise) {
      return await this.exerciseModel.find();
    }
    if (type == WorkoutType.workout) {
      return this.workoutModel.find().populate('exercises').exec();
    }
  }

  async findById(id: string, type: WorkoutType) {
    if (type == WorkoutType.classic) {
      return await this.classicWorkoutModel.findById(id);
    }
    if (type == WorkoutType.exercise) {
      return await this.exerciseModel.findById(id);
    }
    if (type == WorkoutType.workout) {
      return await this.workoutModel.findById(id).populate('exercises').exec();
    }
  }

  async create(body: unknown, type: WorkoutType) {
    if (type == WorkoutType.classic) {
      await this.classicWorkoutModel.create(body);
    }
    if (type == WorkoutType.exercise) {
      await this.exerciseModel.create(body);
    }
    if (type == WorkoutType.workout) {
      await this.workoutModel.create(body);
    }
  }
}
