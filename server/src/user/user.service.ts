import * as bcrypt from 'bcrypt';
import RESPONSE_MESSAGES, { APP_CONSTANTS } from '../common/constant';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './users.dto';
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

  async login(loginUserDto: LoginUserDto) {
    const existingUser = await this.userRepository.getUser(loginUserDto);
    if (existingUser === null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: RESPONSE_MESSAGES.EMAIL_NOT_FOUND_ERROR,
          description: RESPONSE_MESSAGES.EMAIL_NOT_FOUND_ERROR_DESCRIPTION,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    if (!(await bcrypt.compare(loginUserDto.password, existingUser.password)))
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: RESPONSE_MESSAGES.INVALID_CREDENTIALS,
          description: RESPONSE_MESSAGES.INVALID_CREDENTIALS_DESCRIPTION,
        },
        HttpStatus.FORBIDDEN,
      );

    return { name: existingUser.name, email: existingUser.email };
  }
}
