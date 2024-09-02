import { axiosInstance } from '../../config/axios';
import { authSignUpResponseSchema } from '../../schemas/auth';

export async function signUpRequest(input) {
  const endpoint = '/auth/sign-up';

  const { data } = await axiosInstance.post(endpoint, input);

  console.log('data', data);
  const vData = await authSignUpResponseSchema.validate(data);

  return vData;
}
