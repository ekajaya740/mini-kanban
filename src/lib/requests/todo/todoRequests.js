import { axiosInstance } from '../../config/axios';

export async function getTodosRequest() {
  const endpoint = `/todos`;

  const { data } = await axiosInstance.get(endpoint);

  return data;
}

export async function createTodoRequest(input) {
  const endpoint = `/todos`;

  const { data } = await axiosInstance.post(endpoint, input);

  return data;
}
