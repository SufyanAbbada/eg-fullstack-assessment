import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    console.log(
      '\n',
      'RESPONSE FROM SERVER: "',
      request.method,
      '" request to "',
      request.url,
      '" is being returned with',
      exception.getResponse(),
    );

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    response.status(status).json(exceptionResponse);
  }
}
