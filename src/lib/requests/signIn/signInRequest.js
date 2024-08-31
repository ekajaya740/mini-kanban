import { axiosInstance } from '../../config/axios';
import {
  signInResponseSchema,
  signInUserRequestSchema,
} from '../../schemas/user';

export async function signInRequest(input) {
  const endpoint = '/auth/login';

  const vInput = await signInUserRequestSchema.validate(input);

  const { data } = await axiosInstance.post(endpoint, vInput);

  const vData = await signInResponseSchema.validate(data);

  return vData;
}
