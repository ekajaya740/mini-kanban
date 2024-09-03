import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createBoardRequest,
  getBoardsRequest,
} from '../../../requests/board/boardRequests';

export function useBoards() {
  const key = ['board', 'get-all'];

  return useQuery({
    queryKey: key,
    queryFn: getBoardsRequest,
  });
}

export function useCreateBoard() {
  const key = ['board', 'create'];

  const qc = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: createBoardRequest,
    onSuccess: () => {
      qc.invalidateQueries(key);
    },
  });
}

// export function useCreateTodo() {
//   const key = ['todo', 'create'];
//   const qClient = useQueryClient();

//   return useMutation({
//     mutationKey: key,
//     mutationFn: async (input) => await createTodoRequest(input),
//     onSuccess: () => {
//       qClient.invalidateQueries({
//         queryKey: key,
//       });
//     },
//   });
// }
