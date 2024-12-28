import { UserCollection } from '../db/models/User';

export const findUserByEmail = (mailAddress) =>
  UserCollection.findOne(mailAddress);
