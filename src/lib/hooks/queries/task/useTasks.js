import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  moveTaskRequest,
  updateTaskRequest,
} from '../../../requests/task/tasksRequests';

export function useGetTask(id) {
  const key = ['task', 'create', 'board'];

  console.log('ID', id);

  return useQuery({
    queryKey: key,
    queryFn: async () => await getTaskRequest(id),
  });
}

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

export function useMoveTask() {
  const key = ['task', 'move', 'board'];

  const qc = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: moveTaskRequest,
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ['board'],
      });
    },
  });
}

export function useUpdateTask(id) {
  const key = ['task', 'update', id, 'board'];

  const qc = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: async (input) => await updateTaskRequest(id, input),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ['board'],
      });
    },
  });
}

export function useDeleteTask(id) {
  const key = ['task', 'delete', id, 'board'];

  const qc = useQueryClient();

  return useMutation({
    mutationKey: key,
    mutationFn: async () => await deleteTaskRequest(id),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ['board'],
      });
    },
  });
}
