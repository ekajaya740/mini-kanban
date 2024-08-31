import { useQuery } from 'react-query';
import { signUpRequest } from '../../../requests/signUp/signUpRequest';

export function useSignUp() {
  const queryKey = ['signup'];

  return useQuery({
    queryKey: queryKey,
    queryFn: signUpRequest,
  });
}
