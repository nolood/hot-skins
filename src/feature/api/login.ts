import { api, setTokenToApi } from '@/shared/api/api';
import { saveToken } from '@/shared/lib';
import { AuthData } from '@/shared/types/AuthData';
import { AxiosError } from 'axios';
import { createEffect } from 'effector';

export const login = createEffect<AuthData, { auth: boolean; token?: string }, AxiosError>(
  async (params) => {
    try {
      const response = await api.post('/auth/login', { ...params });
      saveToken(response.data.token);
      setTokenToApi(response.data.token);
      return { auth: true, token: response.data.token };
    } catch (e) {
      console.error(e);
      return { auth: false };
    }
  },
);
