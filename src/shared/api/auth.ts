import { createEffect, createStore } from 'effector';
import { createEvent } from 'effector/compat';
import { api } from './api';

type UserStore = {
  id: number;
  username: string;
  balance: number;
  inventory: number;
};

export const $isAuth = createStore<boolean>(false);

export const setIsAuth = createEvent<boolean>();

$isAuth.on(setIsAuth, (_, isAuth) => isAuth);

export const $user = createStore<UserStore | null>(null);

export const fetchUserFx = createEffect<void, UserStore>(async () => {
  try {
    const response = await api.get('/users/health');
    return response.data;
  } catch (e) {
    console.error(e);
  }
});

$user.on(fetchUserFx.doneData, (_, user) => ({ ...user }));
