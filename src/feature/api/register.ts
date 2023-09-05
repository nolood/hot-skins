import { api } from '@/shared/api/api';
import { saveToken } from '@/shared/lib';
import { AuthData } from '@/shared/types/AuthData';
import { AxiosError } from 'axios';
import { createEffect } from 'effector/effector.mjs';

export const register = createEffect<AuthData, boolean, AxiosError>(async (params) => {
  try {
    const response = await api.post('/auth/registration', { ...params });
    saveToken(response.data.token);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
});
