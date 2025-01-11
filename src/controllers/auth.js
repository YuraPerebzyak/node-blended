import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

import {
  clearToken,
  createUser,
  findUserByEmail,
  updateUserWithToken,
} from '../services/user.js';

export const registerController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
  const newUser = await createUser(req.body);

  res.status(201).json({
    token: newUser.token,
    user: {
      name: newUser.name,
      email: newUser.email,
    },
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

  const updatedUser = await updateUserWithToken(user._id);

  res.status(200).json({
    token: updatedUser.token,
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
    },
  });
};

export const logoutController = async (req, res) => {
  await clearToken(req.user._id);

  res.status(204).end();
};
