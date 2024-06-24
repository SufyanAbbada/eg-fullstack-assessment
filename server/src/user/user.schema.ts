import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { APP_CONSTANTS } from '../common/constant';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
  @Prop({
    required: true,
    minlength: APP_CONSTANTS.MINIMUM_NAME_LENGTH,
    match: /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  })
  email: string;

  @Prop({
    required: true,
    // This password length is not of the password but the hashed password that wil be stored for security purposes
    minlength: APP_CONSTANTS.HASHED_PASSWORD_LENGTH,
    maxlength: APP_CONSTANTS.HASHED_PASSWORD_LENGTH,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
