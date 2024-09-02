import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { signInRequest } from '../../../requests/signIn/signInRequest';
import { useNavigate } from 'react-router-dom';

export function useSignIn() {
  const key = ['signin'];

  const navigate = useNavigate();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => signInRequest(input),
    onSuccess: async (data) => {
      Cookies.set(import.meta.env.VITE_COOKIE_TOKEN_KEY, data.token, {
        secure: true,
      });

      navigate(0);
    },
  });
}
