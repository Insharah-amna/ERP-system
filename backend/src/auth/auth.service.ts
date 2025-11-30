import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { UsersService } from 'src/users/users.service';
import { resetUrl } from 'src/utilities/paths';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailService: MailService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.getSingleUser(email);

    if (!user || user.password !== password) {
      return { message: 'Invalid Credentials' };
    }

    return {
      message: 'Login successful',
      user: {
        id: user.userId,
        email: user.email,
        role: user.role,
      },
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.getSingleUser(email);
    if (!user) {
      return { message: 'Email not found' };
    }

    const resetLink = `${resetUrl}/${user.email}`;

    await this.mailService.sendResetEmail(email, resetLink);

    return { message: `Mail sent successfully` };
  }

  async resetPassword(email: string, password: string) {
    const user = await this.usersService.getSingleUser(email);

    if (!user) {
      return { message: 'User not found' };
    }

    user.password = password;
    await this.usersService.updateUser(user.email, password);

    return { message: 'Password successfully reset.' };
  }
}
