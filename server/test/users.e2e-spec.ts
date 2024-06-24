import * as request from 'supertest';
// import * as bcrypt from 'bcrypt';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { UserRepository } from '../src/user/user.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../src/user/user.module';
import RESPONSE_MESSAGES, { APP_CONSTANTS } from '../src/common/constant';
import { getModelToken } from '@nestjs/mongoose';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

describe('Users E2E Testing', () => {
  let app: INestApplication;
  let userRepositoryMock: Partial<UserRepository>;

  beforeEach(async () => {
    userRepositoryMock = {
      createNewUser: jest.fn().mockResolvedValue({
        name: 'Sufyan Abbada',
        email: 'sufyan.abada.sa@gmail.com',
      }),
      emailExists: jest.fn().mockResolvedValue(false),
      getUser: jest.fn().mockResolvedValue({
        name: 'Sufyan Abbada',
        email: 'sufyan.abada.sa@gmail.com',
        password:
          // Used hashed password in order to be used in the test
          '$2b$10$.lYIiNFs0gajKoxftTT/pOdjMZ6c9o8k9p7eHhukJTB65JQL7ku1u',
      }),
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        ThrottlerModule.forRoot([
          {
            ttl: APP_CONSTANTS.TIME_TO_LIVE_FOR_TESTING,
            limit: APP_CONSTANTS.NUMBER_OF_ATTEMPTS_FOR_TESTING,
          },
        ]),
      ],
    })
      .overrideProvider(UserRepository)
      .useValue(userRepositoryMock)
      .overrideProvider(getModelToken('User'))
      .useValue({
        findOne: jest.fn(),
        create: jest.fn(),
      })
      .overrideGuard(ThrottlerGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Testing /users/register Post Endpoint with missing name(required field)', async () => {
    await request(app.getHttpServer())
      .post('/users/register')
      .send({
        email: 'correct@mail.com',
        password: 'good@Strength1',
      })
      .expect(HttpStatus.EXPECTATION_FAILED)
      .expect({
        status: HttpStatus.EXPECTATION_FAILED,
        error: RESPONSE_MESSAGES.NAME_ERROR,
        description: RESPONSE_MESSAGES.NAME_ERROR_DESCRIPTION,
      });
  });

  it('Testing /users/register Post Endpoint with incorrect email format', async () => {
    await request(app.getHttpServer())
      .post('/users/register')
      .send({
        name: 'Craig',
        email: 'incorrect',
        password: 'good@Strength1',
      })
      .expect(HttpStatus.EXPECTATION_FAILED)
      .expect({
        status: HttpStatus.EXPECTATION_FAILED,
        error: RESPONSE_MESSAGES.EMAIL_ERROR,
        description: RESPONSE_MESSAGES.EMAIL_ERROR_DESCRIPTION,
      });
  });

  it('Testing /users/register Post Endpoint with unexpected password', async () => {
    await request(app.getHttpServer())
      .post('/users/register')
      .send({
        name: 'Good Name',
        email: 'correct@mail.com',
        password: 'incomplete',
      })
      .expect(HttpStatus.EXPECTATION_FAILED)
      .expect({
        status: HttpStatus.EXPECTATION_FAILED,
        error: RESPONSE_MESSAGES.PASSWORD_ERROR,
        description: RESPONSE_MESSAGES.PASSWORD_ERROR_DESCRIPTION,
      });
  });

  it('Testing /users/register Post Endpoint with already present Email', async () => {
    (userRepositoryMock.emailExists as jest.Mock).mockResolvedValue(true);

    await request(app.getHttpServer())
      .post('/users/register')
      .send({
        name: 'Correct Name',
        email: 'good@mail.com',
        password: 'Password@correct2',
      })
      .expect(HttpStatus.CONFLICT)
      .expect({
        status: HttpStatus.CONFLICT,
        error: RESPONSE_MESSAGES.EMAIL_ALREADY_PRESENT_ERROR,
        description: RESPONSE_MESSAGES.EMAIL_ALREADY_PRESENT_ERROR_DESCRIPTION,
      });
  });

  it('Testing /users/register Post Endpoint with correct input fields', async () => {
    await request(app.getHttpServer())
      .post('/users/register')
      .send({
        name: 'Sufyan Abbada',
        email: 'sufyan.abada.sa@gmail.com',
        password: 'Test1234*',
      })
      .expect(HttpStatus.CREATED)
      .expect({
        status: HttpStatus.CREATED,
        data: { name: 'Sufyan Abbada', email: 'sufyan.abada.sa@gmail.com' },
      });
  });

  it('Testing /users/login Post Endpoint with incorrect email format ', async () => {
    await request(app.getHttpServer())
      .post('/users/login')
      .send({
        email: 'small@notGood',
        password: 'good@Strength1',
      })
      .expect(HttpStatus.EXPECTATION_FAILED)
      .expect({
        status: HttpStatus.EXPECTATION_FAILED,
        error: RESPONSE_MESSAGES.EMAIL_ERROR,
        description: RESPONSE_MESSAGES.EMAIL_ERROR_DESCRIPTION,
      });
  });

  it('Testing /users/login Post Endpoint with unexpected password', async () => {
    await request(app.getHttpServer())
      .post('/users/login')
      .send({
        email: 'correct@mail.com',
        password: 'missingNumber@',
      })
      .expect(HttpStatus.EXPECTATION_FAILED)
      .expect({
        status: HttpStatus.EXPECTATION_FAILED,
        error: RESPONSE_MESSAGES.PASSWORD_ERROR,
        description: RESPONSE_MESSAGES.PASSWORD_ERROR_DESCRIPTION,
      });
  });

  it('Testing /users/login Post Endpoint with credentials mismatch', async () => {
    await request(app.getHttpServer())
      .post('/users/login')
      .send({
        email: 'notFoundEmail@gmail.com',
        password: 'correct@1Format',
      })
      .expect(HttpStatus.FORBIDDEN)
      .expect({
        status: HttpStatus.FORBIDDEN,
        error: RESPONSE_MESSAGES.INVALID_CREDENTIALS,
        description: RESPONSE_MESSAGES.INVALID_CREDENTIALS_DESCRIPTION,
      });
  });

  it('Testing /users/login Post Endpoint with correct input fields', async () => {
    await request(app.getHttpServer())
      .post('/users/login')
      .send({
        email: 'sufyan.abada.sa@gmail.com',
        password: 'Test1234*',
      })
      .expect(HttpStatus.ACCEPTED)
      .expect({
        status: HttpStatus.ACCEPTED,
        data: { name: 'Sufyan Abbada', email: 'sufyan.abada.sa@gmail.com' },
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
