import { Router } from 'express';

import { registerUserSchema } from '../validation/users.js';
import { validateBody } from '../utils/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { userController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/users/register',
  validateBody(registerUserSchema),
  ctrlWrapper(userController),
);

export default authRouter;
