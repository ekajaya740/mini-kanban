import { object, string } from 'yup';
import { baseDataSchema, baseResponseSchema } from './base';

export const authSignUpRequestSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  password_confirmation: string().required(),
});

export const authSignUpResponseSchema = baseResponseSchema.shape({
  data: baseDataSchema.concat(authSignInRequestSchema),
});

export const authSignInRequestSchema = authSignUpRequestSchema.omit([
  'name',
  'password_confirmation',
]);

export const authSignInResponseSchema = baseResponseSchema.shape({
  token: string(),
});
