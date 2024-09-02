import { axiosInstance } from '../../config/axios';
import { authSignInResponseSchema } from '../../schemas/auth';

export async function signInRequest(input) {
  const endpoint = '/auth/sign-in';

  const { data } = await axiosInstance.post(endpoint, input);

  const vData = await authSignInResponseSchema.validate(data);

  return vData;
}
