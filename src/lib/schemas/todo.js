import { array, number, object, string } from 'yup';

export const baseTodoSchema = object({
  id: number().required(),
  title: string().required(),
  description: string(),
  created_by: string().required(),
  created_at: string().datetime().required(),
  updated_at: string().datetime().required(),
});

export const getAllTodoSchema = array(baseTodoSchema.omit(['created_by']));

export const createTodoRequestSchema = baseTodoSchema.pick([
  'title',
  'description',
]);
