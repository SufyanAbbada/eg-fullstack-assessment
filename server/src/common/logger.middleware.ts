import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      '\n',
      'REQUEST TO SERVER: "',
      req.method,
      '" request came for "',
      req.url,
      '" route, with data:',
      req.body,
      '\n',
    );

    next();
  }
}
