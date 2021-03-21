import { Request, Response } from 'express';

class User {
  store(req: Request, res: Response) {
    const { name } = req.body;
    return res.redirect(307, `sendmail/${name}`);
  }
}

export default new User();
