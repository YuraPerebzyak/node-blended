import { Router } from 'express';

import { loginUserSchema, registerUserSchema } from '../validation/users.js';
import { validateBody } from '../utils/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginController, registerController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/users/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerController),
);

authRouter.post(
  '/users/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginController),
);

export default authRouter;
