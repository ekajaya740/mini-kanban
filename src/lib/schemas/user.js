import { object, string } from 'yup';

export const signUpUserRequestSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  password_confirmation: string().required(),
});

export const signInUserRequestSchema = signUpUserRequestSchema.omit([
  'password_confirmation',
  'name',
]);

export const signInResponseSchema = object({
  auth_token: string().required(),
});

export const signUpResponseSchema = signInResponseSchema.shape({
  message: string(),
});
