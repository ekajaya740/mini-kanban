import { axiosInstance } from '../../config/axios';
import {
  signUpResponseSchema,
  signUpUserRequestSchema,
} from '../../schemas/user';

export async function signUpRequest(input) {
  const endpoint = '/signup';

  const vInput = await signUpUserRequestSchema.validate(input);

  const { data } = await axiosInstance.post(endpoint, vInput);

  const vData = await signUpResponseSchema.validate(data);

  return vData;
}
