import { useMutation } from 'react-query';
import { signUpRequest } from '../../../requests/signUp/signUpRequest';
import { useNavigate } from 'react-router-dom';

export function useSignUp() {
  const key = ['signup'];

  const navigate = useNavigate();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => await signUpRequest(input),
    onSuccess: () => {
      navigate('/auth/sign-in');
    },
  });
}
