import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createTodoRequest,
  getTodosRequest,
} from '../../../requests/todo/todoRequests';

export function useTodos() {
  const key = ['todo', 'get-all'];

  return useQuery({
    queryKey: key,
    queryFn: getTodosRequest,
  });
}

export function useCreateTodo() {
  const key = ['todo', 'create'];
  const qClient = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => await createTodoRequest(input),
    onSuccess: () => {
      qClient.invalidateQueries({
        queryKey: key,
      });
    },
  });
}
