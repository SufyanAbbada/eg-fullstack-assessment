import * as bcrypt from 'bcrypt';
import RESPONSE_MESSAGES, { APP_CONSTANTS } from 'src/common/constant';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async registerNewUser(createUserDTO: CreateUserDto) {
    const { name, email, password } = createUserDTO;

    if (await this.userRepository.emailExists(email)) {
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

    const newUser = await this.userRepository.createNewUser({
      name,
      email,
      password: await bcrypt.hash(password, APP_CONSTANTS.SALT_ROUNDS),
    });

    return { name: newUser.name, email: newUser.email };
  }

  login() {
    console.log('Lets Login');
  }
}
