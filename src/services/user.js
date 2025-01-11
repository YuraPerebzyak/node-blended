import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserCollection } from '../db/models/User.js';
import { env } from '../utils/env.js';

export const findUserByEmail = (emailAddress) =>
  UserCollection.findOne({ email: emailAddress });

export const updateUserWithToken = (userId) => {
  const token = jwt.sign(
    {
      id: userId,
    },
    env('JWT_SECRET'),
  );

  return UserCollection.findByIdAndUpdate(userId, { token }, { new: true });
};

export const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = await UserCollection.create({
    ...userData,
    password: hashedPassword,
  });

  return updateUserWithToken(newUser._id);
};

export const findUserById = (userId) => UserCollection.findById(userId);

export const clearToken = async (userId) => {
  await UserCollection.findByIdAndUpdate(userId, { token: '' });
};
