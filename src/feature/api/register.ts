import { api } from '@/shared/api/api';
import { saveToken } from '@/shared/lib';
import { AuthData } from '@/shared/types/AuthData';
import { AxiosError } from 'axios';
import { createEffect } from 'effector/effector.mjs';

export const register = createEffect<AuthData, { auth: boolean; token?: string }, AxiosError>(
  async (params) => {
    try {
      const response = await api.post('/auth/registration', { ...params });
      saveToken(response.data.token);
      return { auth: true, token: response.data.token };
    } catch (e) {
      console.error(e);
      return { auth: false };
    }
  },
);
