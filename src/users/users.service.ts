import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(name: string, email: string): Promise<User> {
    const createdUser = new this.userModel({ name, email });
    return await createdUser.save();
  }

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
