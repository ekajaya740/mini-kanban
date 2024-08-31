import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createItemRequest,
  deleteItemRequest,
  getItemsRequest,
  updateItemRequest,
} from '../../../requests/item/itemRequests';

export function useItems(todoId) {
  const key = ['item', 'get-all', 'todo', todoId];

  return useQuery({
    queryKey: key,
    queryFn: () => getItemsRequest(todoId),
  });
}

export function useCreateItem(todoId) {
  const key = ['item', 'create', 'todo', todoId];
  const qClient = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => await createItemRequest(todoId, input),
    onSuccess: () => {
      qClient.invalidateQueries({
        queryKey: key,
      });
    },
  });
}

export function useUpdateItem(todoId, itemId) {
  const key = ['item', 'create', 'todo', todoId, itemId];
  const qClient = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => await updateItemRequest(todoId, itemId, input),
    onSuccess: () => {
      qClient.invalidateQueries({
        queryKey: key,
      });
    },
  });
}

export function useDeleteItem(todoId, itemId) {
  const key = ['item', 'create', 'todo', todoId, itemId];
  const qClient = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: async () => await deleteItemRequest(todoId, itemId),
    onSuccess: () => {
      qClient.invalidateQueries({
        queryKey: key,
      });
    },
  });
}
