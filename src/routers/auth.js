import { Router } from 'express';

import { loginUserSchema, registerUserSchema } from '../validation/users.js';
import { validateBody } from '../utils/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginController,
  logoutController,
  registerController,
} from '../controllers/auth.js';
import { checkToken } from '../middlewares/checkToken.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  validateBody(registerUserSchema),
  ctrlWrapper(registerController),
);

authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginController),
);

authRouter.post('/logout', checkToken, ctrlWrapper(logoutController));

export default authRouter;
