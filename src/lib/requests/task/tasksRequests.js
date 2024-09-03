import { axiosInstance } from '../../config/axios';
import { baseResponseSchema } from '../../schemas/base';
import {
  createTaskResponseSchema,
  getAllTaskSchema,
  moveTaskResponseSchema,
  updateTaskResponseSchema,
} from '../../schemas/task';

export async function getTasksRequest(todoId) {
  const endpoint = `/todos/${todoId}/items`;

  const { data } = await axiosInstance.get(endpoint);

  const vData = await getAllTaskSchema.validate(data);

  return vData;
}

export async function createTaskRequest(input) {
  const endpoint = '/task';

  const { data } = await axiosInstance.post(endpoint, input);

  const vData = await createTaskResponseSchema.validate(data);

  return vData;
}

export async function moveTaskRequest(input) {
  const endpoint = '/task/move';

  const { data } = await axiosInstance.post(endpoint, input);

  const vData = await moveTaskResponseSchema.validate(data);

  return vData;
}

export async function updateTaskRequest(id, input) {
  const endpoint = `/task/${id}`;

  const { data } = await axiosInstance.put(endpoint, input);

  console.log(data);

  const vData = await updateTaskResponseSchema.validate(data);

  return vData;
}

export async function deleteTaskRequest(id) {
  const endpoint = `/task/${id}`;

  const { data } = await axiosInstance.delete(endpoint);

  const vData = await baseResponseSchema.validate(data);

  return vData;
}
