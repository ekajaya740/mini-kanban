import { useMutation } from 'react-query';
import Cookies from 'js-cookie';
import { signInRequest } from '../../../requests/signIn/signInRequest';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function useSignIn() {
  const key = ['signin'];

  const navigate = useNavigate();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => signInRequest(input),
    onSuccess: async (data) => {
      console.log(data);
      if (data.token) {
        Cookies.set(import.meta.env.VITE_COOKIE_TOKEN_KEY, data.token, {
          secure: true,
          expires: 1,
        });

        toast.success(data.message);

        navigate('/');

        return;
      }
      toast.error(data.message);
    },
  });
}
