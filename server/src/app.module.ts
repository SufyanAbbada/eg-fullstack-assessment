import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_CONSTANTS } from './common/constant';

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'),
      }),
      inject: [ConfigService],
    }),

    ThrottlerModule.forRoot([
      {
        ttl: APP_CONSTANTS.TIME_TO_LIVE,
        limit: APP_CONSTANTS.NUMBER_OF_ATTEMPTS,
      },
    ]),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
