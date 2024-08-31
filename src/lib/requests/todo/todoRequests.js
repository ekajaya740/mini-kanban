import { axiosInstance } from '../../config/axios';
import {
  baseTodoSchema,
  createTodoRequestSchema,
  getAllTodoSchema,
} from '../../schemas/todo';

export async function getTodosRequest() {
  const endpoint = `/todos`;

  const { data } = await axiosInstance.get(endpoint);

  const vData = await getAllTodoSchema.validate(data);

  return vData;
}

export async function createTodoRequest(input) {
  const endpoint = `/todos`;

  const vInput = await createTodoRequestSchema.validate(input);

  const { data } = await axiosInstance.post(endpoint, vInput);

  const vData = await baseTodoSchema.validate(data);

  return vData;
}
