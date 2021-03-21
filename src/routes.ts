import { Router } from 'express';

import NodemailerController from './controllers/Nodemailer';
import UserController from './controllers/User';

const router = Router();

router.post('/users', UserController.store);
router.post('/sendmail/:name', NodemailerController.sendMail);

export default router;
