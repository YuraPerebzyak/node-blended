import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  pasword: Joi.string().min(6).required(),
});
