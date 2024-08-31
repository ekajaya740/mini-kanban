import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { signInRequest } from '../../../requests/signIn/signInRequest';

export function useSignIn() {
  const queryKey = ['signin'];

  return useQuery({
    queryKey: queryKey,
    queryFn: signInRequest,
    onSuccess: async (data) => {
      Cookies.set(import.meta.env.VITE_COOKIE_TOKEN_KEY, data.auth_token, {
        secure: true,
      });
    },
  });
}
