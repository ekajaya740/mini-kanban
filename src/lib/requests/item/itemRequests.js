import { axiosInstance } from '../../config/axios';

export async function getItemsRequest(todoId) {
  const endpoint = `/todos/${todoId}/items`;

  const { data } = await axiosInstance.get(endpoint);

  return data;
}

export async function createItemRequest(todoId, input) {
  const endpoint = `/todos/${todoId}/items`;

  const { data } = await axiosInstance.post(endpoint, input);

  return data;
}

export async function updateItemRequest(todoId, itemId, input) {
  const endpoint = `/todos/${todoId}/items/${itemId}`;

  const { data } = await axiosInstance.patch(endpoint, input);

  return data;
}

export async function deleteItemRequest(todoId, itemId) {
  const endpoint = `/todos/${todoId}/items/${itemId}`;

  const { data } = await axiosInstance.delete(endpoint);

  return data;
}
