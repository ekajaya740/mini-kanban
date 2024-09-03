import { array, object, string } from 'yup';
import { baseDataSchema, baseResponseSchema } from './base';
import { baseTaskSchema } from './task';
import dayjs from 'dayjs';

export const baseBoardSchema = object({
  title: string().required(),
  start_date: string()
    .transform((val) => dayjs().format('YYYY-MM-DD', val))
    .required(),
  end_date: string()
    .transform((val) => dayjs().format('YYYY-MM-DD', val))
    .required(),

  user_id: string().uuid().required(),
});

export const getAllBoardResponseSchema = array(
  baseDataSchema.concat(
    baseBoardSchema.shape({
      task: array(baseTaskSchema),
    })
  )
);

export const createBoardRequestSchema = baseBoardSchema.pick([
  'title',
  'start_date',
  'end_date',
]);

export const createBoardResponseSchema = baseResponseSchema.shape({
  data: baseDataSchema.concat(baseBoardSchema),
});

export const boardFormSchema = baseBoardSchema.pick([
  'title',
  'start_date',
  'end_date',
]);
