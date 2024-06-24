import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.error(
      '\n',
      'RESPONSE FROM SERVER: "',
      request.method,
      '" request to "',
      request.url,
      '" with body as"',
      request.body,
      '" and params as"',
      request.params,
      '" and query as"',
      request.query,
      '" was unable to be handled by the server\n',
    );

    response.status(422).json({
      status: 422,
      error: 'Unexpected Error occurred',
      description:
        'An unexpected Error occurred and our team will readily look into it',
    });
  }
}
