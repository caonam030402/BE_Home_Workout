import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ExerciseDocument = Exercise & Document;

@Schema()
export class Exercise {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  fitTime: number;

  @Prop([String])
  images: string[];

  @Prop({ required: true })
  video: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' })
  workout: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);

export type WorkoutDocument = Workout & Document;

@Schema()
export class Workout {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  level: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  time: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }] })
  exercises: Exercise[];
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);

@Schema()
export class ClassicWorkout {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  image: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }] })
  list: Workout[];
}

export const ClassicWorkoutSchema =
  SchemaFactory.createForClass(ClassicWorkout);
