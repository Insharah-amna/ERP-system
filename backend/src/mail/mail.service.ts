import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

const myGmail = 'insharahamna7@gmail.com';
const emailPassword = 'xmmx ucbb xdor tgua';

@Injectable()
export class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: myGmail,
        pass: emailPassword,
      },
    });
  }

  async sendResetEmail(to: string, resetLink: string): Promise<void> {
    await this.transporter.sendMail({
      from: myGmail,
      to,
      subject: 'Password Reset Request',
      text: `Click this link to reset your password: ${resetLink}`,
      html: `
        <div style="background:#ffffff; padding:20px; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,0.1);">
          <p style="font-size:16px; color:#333;">
            Click this link to reset your password:
          </p>
          <a href="${resetLink}" 
            style="display:inline-block; margin-top:10px; padding:10px 15px; background:#4f46e5; color:white; text-decoration:none; border-radius:6px;">
            Reset Password
          </a>
      </div>`,
    });
  }
}
