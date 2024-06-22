import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './users.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createNewUser(createUserDTO: CreateUserDto) {
    return await this.userModel.create(createUserDTO);
  }

  async emailExists(email: string) {
    return (await this.userModel.findOne({ email: email })) !== null;
  }
}
