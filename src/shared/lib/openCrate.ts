import { createEffect } from 'effector';
import { api } from '../api/api';
import { User } from '../types/User';

export const openCrateFx = createEffect<{ id: string }, User, void>(async (params) => {
  try {
    const response = await api.get(`/users/open/${params.id}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
});
