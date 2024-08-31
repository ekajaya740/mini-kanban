import { array, bool, number, object, string } from 'yup';

export const baseItemSchema = object({
  id: number().required(),
  name: string().required(),
  done: bool().nullable(),
  todo_id: number().required(),
  created_at: string().datetime().required(),
  updated_at: string().datetime().required(),
  progress_percentage: number().max(100).nullable(),
});

export const getAllItemSchema = array(baseItemSchema);

export const createItemRequestSchema = baseItemSchema.pick([
  'name',
  'progress_percentage',
]);

export const updateItemRequestSchema = baseItemSchema.pick(['name']).shape({
  target_todo_id: number().required(),
});
