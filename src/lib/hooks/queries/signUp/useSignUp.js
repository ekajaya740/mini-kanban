import { useMutation } from 'react-query';
import { signUpRequest } from '../../../requests/signUp/signUpRequest';
import Cookies from 'js-cookie';

export function useSignUp() {
  const key = ['signup'];

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => await signUpRequest(input),
    onSuccess: (data) => {
      Cookies.set(import.meta.env.VITE_COOKIE_TOKEN_KEY, data.auth_token, {
        secure: true,
      });
    },
  });
}
