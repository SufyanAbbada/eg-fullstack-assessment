import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto, LoginUserDto } from './users.dto';
import { InputValidationPipe } from '../common/input-validation.pipe';
import { LoggingInterceptor } from '../common/logger.interceptor';
import { HttpExceptionFilter } from '../common/http-exception.filter';

@Controller('users')
@UsePipes(new InputValidationPipe())
@UseInterceptors(LoggingInterceptor)
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async addNewUser(@Body() createUserDTO: CreateUserDto) {
    const newUser = await this.userService.registerNewUser(createUserDTO);

    return {
      status: HttpStatus.CREATED,
      data: newUser,
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  async signIn(@Body() loginUserDto: LoginUserDto) {
    const existingUser = await this.userService.login(loginUserDto);

    return {
      status: HttpStatus.ACCEPTED,
      data: existingUser,
    };
  }
}
