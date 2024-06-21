import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './users.dto';
import { InputValidationPipe } from 'src/common/input-validation.pipe';

@Controller('users')
@UsePipes(new InputValidationPipe())
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('register')
  addNewUser(@Body() createUserDTO: CreateUserDto) {
    return this.userService.registerNewUser(createUserDTO);
  }

  @Post('login')
  signIn() {
    return this.userService.login();
  }
}
