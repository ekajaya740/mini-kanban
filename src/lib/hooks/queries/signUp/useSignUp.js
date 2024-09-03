import { useMutation } from 'react-query';
import { signUpRequest } from '../../../requests/signUp/signUpRequest';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export function useSignUp() {
  const key = ['signup'];

  const navigate = useNavigate();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => await signUpRequest(input),
    onSuccess: (data) => {
      toast.success(data.message);
      navigate('/auth/sign-in');
    },
    onError: () => {
      toast.error('Error creating user');
    },
  });
}
