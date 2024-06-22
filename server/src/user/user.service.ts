import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import RESPONSE_MESSAGES, { APP_CONSTANTS } from 'src/common/constant';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async registerNewUser(createUserDTO: CreateUserDto) {
    const { name, email, password } = createUserDTO;

    if (await this.userRepository.emailExists(email))
      return this.userRepository.createNewUser({
        name,
        email,
        password: await bcrypt.hash(password, APP_CONSTANTS.SALT_ROUNDS),
      });
    else {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: RESPONSE_MESSAGES.EMAIL_ALREADY_PRESENT_ERROR,
          description:
            RESPONSE_MESSAGES.EMAIL_ALREADY_PRESENT_ERROR_DESCRIPTION,
        },
        HttpStatus.CONFLICT,
      );
    }
  }

  login() {
    console.log('Lets Login');
  }
}
