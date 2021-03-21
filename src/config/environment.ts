import * as dotenv from 'dotenv';

import { resolve } from 'path';

dotenv.config({
  path: resolve(__dirname, '..', '..', '.env.development'),
});

export default {
  user: process.env.NODEMAILER_USER ?? '',
  pass: process.env.NODEMAILER_PASS ?? '',
};
