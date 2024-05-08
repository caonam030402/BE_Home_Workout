import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;
@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ type: Types.ObjectId, default: new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  gender: string;

  @Prop()
  avatar: string;

  @Prop()
  weight: number;

  @Prop()
  height: number;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save', function (next) {
  if (!this._id) {
    this._id = new Types.ObjectId(); // Auto-generate confirmationId if not specified
  }
  next();
});
