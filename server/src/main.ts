import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/general-exception.filter';
import { APP_CONSTANTS } from './common/constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const corsOptions = {
    origin: configService.get<string>('FRONTEND_URL'),
    optionsSuccessStatus: APP_CONSTANTS.CORS_STATUS,
  };

  app.use(helmet());
  app.enableCors(corsOptions);
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
