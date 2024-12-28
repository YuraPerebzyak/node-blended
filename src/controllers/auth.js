import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

import { createUser, findUserByEmail } from '../services/user.js';

export const registerController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const newUser = await createUser(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: { name: newUser.name, email: newUser.email },
  });
};

export const loginController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (!user) {
    throw createHttpError(401, 'Email or password are wrong');
  }

  const isEqual = await bcrypt.compare(req.body.password, user.password);
  if (!isEqual) {
    throw createHttpError(401, 'Email or password are wrong');
  }
};
