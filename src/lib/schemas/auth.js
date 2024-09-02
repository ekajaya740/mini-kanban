import { object, string } from 'yup';
import { baseDataSchema, baseResponseSchema } from './base';

export const authSignUpRequestSchema = object({
  email: string().email().required(),
  password: string().required(),
}).noUnknown();

export const authSignInRequestSchema = authSignUpRequestSchema.omit([
  'password_confirmation',
]);

export const authSignUpResponseSchema = baseResponseSchema
  .shape({
    data: baseDataSchema.concat(authSignInRequestSchema),
  })
  .noUnknown();

export const authSignInResponseSchema = baseResponseSchema
  .shape({
    token: string(),
  })
  .noUnknown();
