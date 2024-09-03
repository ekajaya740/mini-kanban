import { number, object, string } from 'yup';

export const baseDataSchema = object({
  id: string().uuid(),
  created_at: string().datetime(),
  updated_at: string().datetime().nullable(),
});

export const baseResponseSchema = object({
  statusCode: number(),
  message: string(),
});
