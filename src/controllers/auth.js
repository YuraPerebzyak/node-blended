import createHttpError from 'http-errors';
import { findUserByEmail } from '../services/user.js';

export const userController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
};
