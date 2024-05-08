import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorkoutService, WorkoutType } from './workout.service';
import { successResponse } from 'src/utils';

@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get('/')
  async getAllWorkout() {
    const workout = await this.workoutService.findAll(WorkoutType.workout);
    return successResponse('Danh sách người dùng', workout);
  }

  @Get('/classic')
  async getAllClassicWorkout() {
    const workout = await this.workoutService.findAll(WorkoutType.classic);
    return successResponse('Danh sách người dùng', workout);
  }

  @Get('/exercise')
  async getAllExercise() {
    const exercise = await this.workoutService.findAll(WorkoutType.exercise);
    return successResponse('Lấy thành công', exercise);
  }

  @Get('/:_id')
  async getWorkout(@Param() _id: string) {
    const workout = await this.workoutService.findById(
      _id,
      WorkoutType.workout,
    );
    return successResponse('Lấy người dùng thành công', workout);
  }

  @Get('/exercise/:_id')
  async getExercise(@Param() _id: string) {
    const workout = await this.workoutService.findById(
      _id,
      WorkoutType.exercise,
    );
    return successResponse('Lấy người dùng thành công', workout);
  }

  @Get('/classic/:_id')
  async getClassicWorkout(@Param() _id: string) {
    const workout = await this.workoutService.findById(
      _id,
      WorkoutType.classic,
    );
    return successResponse('Lấy người dùng thành công', workout);
  }

  @Post('/')
  async createWorkout(@Body() body) {
    const workout = await this.workoutService.create(body, WorkoutType.workout);
    return successResponse('Thêm thành công', workout);
  }

  @Post('/classic')
  async createClassicWorkout(@Body() body) {
    const workout = await this.workoutService.create(body, WorkoutType.classic);
    return successResponse('Thêm thành công', workout);
  }

  @Post('/exercise')
  async createExercise(@Body() body) {
    const exercise = await this.workoutService.create(
      body,
      WorkoutType.exercise,
    );
    return successResponse('Thêm thành công', exercise);
  }
}
