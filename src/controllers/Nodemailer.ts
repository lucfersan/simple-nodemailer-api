import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

import envConfig from '../config/environment';

class Nodemailer {
  async sendMail(req: Request, res: Response) {
    const { name } = req.params;

    const transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: envConfig.user,
        pass: envConfig.pass,
      },
    });

    await transport.sendMail({
      from: '"Lucas Fernandes" <me@lucas.com>',
      to: 'person@test.com',
      subject: 'Welcome to our platform!',
      text: 'Welcome to our platform!',
      html: `<p>Hello ${name}, we are glad you joined our platform!</p>`,
    });

    return res.json({ email: 'Email send successfully.' }).status(201);
  }
}

export default new Nodemailer();
