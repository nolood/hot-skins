import { api } from '@/shared/api/api';
import { createEffect } from 'effector';

export const login = createEffect(async () => {
  try {
    const response = await api.post('/auth/login');
    console.log(response);
  } catch (e) {
    console.error(e);
  }
});
