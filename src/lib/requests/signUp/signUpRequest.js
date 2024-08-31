import { axiosInstance } from '../../config/axios';

export async function signUpRequest(input) {
  const endpoint = '/signup';

  const { data } = await axiosInstance.post(endpoint, input);

  return data;
}
