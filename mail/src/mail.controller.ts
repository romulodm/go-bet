import { Controller, Body, Post, Res } from '@nestjs/common';
import { MailService } from './mail.service';
import { User } from './user/user.entity';

@Controller('v1/mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/reset-code')
  async codeToResetPassword(@Body() body: { user: User, code: string }, @Res() response: any) {
    const { user, code } = body;
    if (!user || !user.email || !user.name) {
      // Se o objeto user ou suas propriedades estiverem faltando, retorne um erro
      return response.status(400).json({
          message: 'bad-request'
      });
    }

    try {
      const mail = await this.mailService.sendCodeToResetPassword(user, code);
      return response.status(200).json({
        message: 'success',
        mail
      });
    } catch (error) {
      return response.status(500).json({
        message: 'error',
        error: error.message
      });
    }
  }
}
