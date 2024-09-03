import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { signInRequest } from '../../../requests/signIn/signInRequest';

export function useSignIn() {
  const key = ['signin'];

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => signInRequest(input),
    onSuccess: async (data) => {
      Cookies.set(import.meta.env.VITE_COOKIE_TOKEN_KEY, data.auth_token, {
        secure: true,
        expires: 1,
      });
    },
  });
}
