import { axiosInstance } from '../../config/axios';

export async function signInRequest(input) {
  const endpoint = '/auth/login';

  const { data } = await axiosInstance.post(endpoint, input);

  return data;
}
