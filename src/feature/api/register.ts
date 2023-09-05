import { api } from '@/shared/api/api';
import { createEffect } from 'effector/effector.mjs';

export const register = createEffect(async () => {
  try {
    const response = await api.post('/auth/register');
    console.log(response);
  } catch (e) {
    console.error(e);
  }
});
