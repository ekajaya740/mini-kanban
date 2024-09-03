import { useMutation, useQueryClient } from 'react-query';
import { createTaskRequest } from '../../../requests/task/tasksRequests';

// export function useItems() {
//   const key = ['task', 'get-all'];

//   return useQuery({
//     queryKey: key,
//     queryFn: () => getItemsRequest(todoId),
//   });
// }

export function useCreateTask() {
  const key = ['task', 'create', 'board'];
  const qc = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: createTaskRequest,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ['board'],
      });
    },
  });
}

// export function useUpdateItem(todoId, itemId) {
//   const key = ['item', 'create', 'todo', todoId, itemId];
//   const qClient = useQueryClient();

//   return useMutation({
//     mutationKey: key,
//     mutationFn: async (input) => await updateItemRequest(todoId, itemId, input),
//     onSuccess: () => {
//       qClient.invalidateQueries({
//         queryKey: key,
//       });
//     },
//   });
// }

// export function useDeleteItem(todoId, itemId) {
//   const key = ['item', 'create', 'todo', todoId, itemId];
//   const qClient = useQueryClient();

//   return useMutation({
//     mutationKey: key,
//     mutationFn: async () => await deleteItemRequest(todoId, itemId),
//     onSuccess: () => {
//       qClient.invalidateQueries({
//         queryKey: key,
//       });
//     },
//   });
// }
