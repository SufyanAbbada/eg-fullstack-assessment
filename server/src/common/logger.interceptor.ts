import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<string> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap((data) => {
        console.log(
          '\n',
          'RESPONSE FROM SERVER: "',
          request.method,
          '" request to "',
          request.url,
          '" is being returned with:',
          data,
        );
      }),
    );
  }
}
