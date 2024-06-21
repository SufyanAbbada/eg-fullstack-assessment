import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  registerNewUser(createUserDTO: CreateUserDto) {
    // Will attach database here
    return createUserDTO;
  }

  login() {
    console.log('Lets Login');
  }
}
