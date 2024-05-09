import { Controller, Body, Post, Res } from '@nestjs/common';
import { MailService } from './mail.service';
import { User } from './user/user.entity';

@Controller('v1/mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/reset-code')
  async codeToResetPassword(@Body() body: { user: User, code: string }, @Res() response: any) {
    const { user, code } = body;
    const mail = await this.mailService.sendCodeToResetPassword(user, code);

    return response.status(200).json({
      message: 'success',
      mail
    });
  }
}
