import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/users.dto';
import {
  validateEmail,
  validateName,
  validatePassword,
} from './input-validators.helper';
import RESPONSE_MESSAGES from './constant';

@Injectable()
export class InputValidationPipe implements PipeTransform {
  // * The reason to use `any` as a type here is to have the grip on our end to respond with a custom error
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body' && metadata.metatype !== CreateUserDto) {
      throw new HttpException(
        {
          status: HttpStatus.PRECONDITION_FAILED,
          error: RESPONSE_MESSAGES.REQUEST_ERROR,
          description: RESPONSE_MESSAGES.REQUEST_ERROR_DESCRIPTION,
        },
        412,
      );
    }

    if (!validateName(value.name))
      throw new HttpException(
        {
          status: HttpStatus.EXPECTATION_FAILED,
          error: RESPONSE_MESSAGES.NAME_ERROR,
          description: RESPONSE_MESSAGES.NAME_ERROR_DESCRIPTION,
        },
        417,
      );

    if (!validateEmail(value.email))
      throw new HttpException(
        {
          status: HttpStatus.EXPECTATION_FAILED,
          error: RESPONSE_MESSAGES.EMAIL_ERROR,
          description: RESPONSE_MESSAGES.EMAIL_ERROR_DESCRIPTION,
        },
        417,
      );

    if (!validatePassword(value.password)) {
      throw new HttpException(
        {
          status: HttpStatus.EXPECTATION_FAILED,
          error: RESPONSE_MESSAGES.PASSWORD_ERROR,
          description: RESPONSE_MESSAGES.PASSWORD_ERROR_DESCRIPTION,
        },
        417,
      );
    }

    // Trimming the name in case trailing spaces were added
    value.name = value.name.trim();
    return value;
  }
}
