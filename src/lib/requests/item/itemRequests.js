import { axiosInstance } from '../../config/axios';
import {
  baseItemSchema,
  createItemRequestSchema,
  getAllItemSchema,
  updateItemRequestSchema,
} from '../../schemas/item';

export async function getItemsRequest(todoId) {
  const endpoint = `/todos/${todoId}/items`;

  const { data } = await axiosInstance.get(endpoint);

  const vData = await getAllItemSchema.validate(data);

  return vData;
}

export async function createItemRequest(todoId, input) {
  const endpoint = `/todos/${todoId}/items`;

  const vInput = await createItemRequestSchema.validate(input);

  const { data } = await axiosInstance.post(endpoint, vInput);

  const vData = await baseItemSchema.validate(data);

  return vData;
}

export async function updateItemRequest(todoId, itemId, input) {
  const endpoint = `/todos/${todoId}/items/${itemId}`;

  const vInput = await updateItemRequestSchema.validate(input);

  const { data } = await axiosInstance.patch(endpoint, vInput);

  const vData = await baseItemSchema.validate(data);

  return vData;
}

export async function deleteItemRequest(todoId, itemId) {
  const endpoint = `/todos/${todoId}/items/${itemId}`;

  const { data } = await axiosInstance.delete(endpoint);

  return data;
}
