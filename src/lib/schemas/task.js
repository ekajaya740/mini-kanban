import { array, number, object, string } from 'yup';
import { baseDataSchema, baseResponseSchema } from './base';

export const baseTaskSchema = object({
  name: string().required(),
  board_id: string().required(),
  progress_percentage: number().max(100).nullable(),
});

export const getTaskResponseSchema = baseResponseSchema.shape({
  data: baseDataSchema.concat(baseTaskSchema),
});

export const getAllTaskSchema = array(baseTaskSchema);

export const getAllTasksResponseSchema = baseResponseSchema.shape({
  data: array(baseDataSchema.concat(baseTaskSchema)),
});

export const createTaskRequestSchema = baseTaskSchema;

export const createTaskFormSchema = createTaskRequestSchema.omit(['board_id']);

export const createTaskResponseSchema = baseResponseSchema.shape({
  data: baseDataSchema.concat(baseTaskSchema),
});

export const moveTaskRequestSchema = object({
  id: string().uuid().required(),
  board_id: string().uuid().required(),
});

export const moveTaskResponseSchema = createTaskResponseSchema;

export const updateTaskRequestSchema = baseTaskSchema.pick([
  'name',
  'progress_percentage',
]);
export const updateTaskResponseSchema = baseResponseSchema.shape({
  data: baseDataSchema.concat(baseTaskSchema),
});
