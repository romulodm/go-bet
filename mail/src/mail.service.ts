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
        template: './reset-password.hbs',
        context: {
          name: user.name,
          code,
        },
      });
      console.log("E-mail enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  }
}