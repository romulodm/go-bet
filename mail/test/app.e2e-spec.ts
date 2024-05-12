import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MailModule } from '../src/mail.module';

describe('MailController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MailModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/reset-code (POST)', () => {
    const user = { email: 'coc2netin@gmail.com', name: 'Test User' };
    const code = '123456';
  
    return request(app.getHttpServer())
      .post('/v1/mail/reset-code')
      .send({ user, code })
      .expect(200)
      .expect((res) => {
        expect(res.body.message).toEqual('success');
        expect(res.body.mail).toContain(user.email);
      });
  });
  
});
