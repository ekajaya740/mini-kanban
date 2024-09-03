import { axiosInstance } from '../../config/axios';
import {
  createBoardResponseSchema,
  getAllBoardResponseSchema,
} from '../../schemas/board';

export async function getBoardsRequest() {
  const endpoint = `/board`;

  const { data } = await axiosInstance.get(endpoint);

  const vData = await getAllBoardResponseSchema.validate(data);

  return vData;
}

export async function createBoardRequest(input) {
  const endpoint = '/board';

  const { data } = await axiosInstance.post(endpoint, input);

  const vData = await createBoardResponseSchema.validate(data);

  return vData;
}
