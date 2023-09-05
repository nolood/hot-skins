import { createEffect, createStore } from 'effector';
import { createEvent } from 'effector/compat';
import { api } from './api';

type UserStore = {
  id: number;
  name: string;
  balance: string;
  isAuth: boolean;
};

export const $isAuth = createStore<boolean>(false);

export const setIsAuth = createEvent<boolean>();

$isAuth.on(setIsAuth, (_, isAuth) => isAuth);

export const $user = createStore<UserStore | null>(null);

export const fetchUserFx = createEffect(async () => {
  try {
    const response = await api.get('/health');
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
});
