import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './user/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  public async sendCodeToResetPassword(user: User, code: string) {
    try {
      await this.mailerService.sendMail({
        to: user.email,
        subject: 'Reset your password - Go Bet',
        template: 'reset-password',
        context: {
          name: user.name,
          code: code,
        },
      });
      return `E-mail sended to ${user.email}`;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to send e-mail');
    }
  }
}
