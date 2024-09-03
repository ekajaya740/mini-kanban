import { axiosInstance } from '../../config/axios';
import {
  createTaskResponseSchema,
  getAllTaskSchema,
  // baseItemSchema,
  // createItemRequestSchema,

  // updateItemRequestSchema,
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

// export async function createTaskRequest(todoId, input) {
//   const endpoint = `/todos/${todoId}/items`;

//   const vInput = await createItemRequestSchema.validate(input);

//   const { data } = await axiosInstance.post(endpoint, vInput);

//   const vData = await baseItemSchema.validate(data);

//   return vData;
// }

// export async function updateTaskRequest(todoId, itemId, input) {
//   const endpoint = `/todos/${todoId}/items/${itemId}`;

//   const vInput = await updateTaskRequestSchema.validate(input);

//   const { data } = await axiosInstance.patch(endpoint, vInput);

//   const vData = await baseItemSchema.validate(data);

//   return vData;
// }

// export async function deleteTaskRequest(todoId, itemId) {
//   const endpoint = `/todos/${todoId}/items/${itemId}`;

//   const { data } = await axiosInstance.delete(endpoint);

//   return data;
// }
