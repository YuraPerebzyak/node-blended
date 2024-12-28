import bcrypt from 'bcrypt';

import { UserCollection } from '../db/models/User.js';
import { SessionCollection } from '../db/models/Session.js';

export const findUserByEmail = (emailAddress) =>
  UserCollection.findOne({ email: emailAddress });

export const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return UserCollection.create({ ...userData, password: hashedPassword });
};

export const createActiveSession = async (userId) => {
  await SessionCollection.deleteOne({ userId });
};
