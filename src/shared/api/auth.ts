import { login } from '@/feature/api/login';
import { register } from '@/feature/api/register';
import { createEffect, createStore } from 'effector';
import { createEvent } from 'effector/compat';
import { openCrateFx } from '../lib/openCrate';
import { sellSkinFx } from '../lib/sellSkin';
import { api } from './api';

type UserStore = {
  id: number;
  username: string;
  balance: number;
  inventory: number;
  token?: string;
};

export const $token = createStore<string | null>(null);

export const $isAuth = createStore<boolean>(false);

export const setIsAuth = createEvent<boolean>();

export const resetUser = createEvent<void>();

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

$user
  .on(fetchUserFx.doneData, (_, user) => ({ ...user }))
  .on(resetUser, () => null)
  .on(openCrateFx.doneData, (_, payload) => ({ ...payload }))
  .on(sellSkinFx.doneData, (state, payload) => {
    if (state) {
      return { ...state, balance: payload.user.balance };
    }
  });
$token.on(register.doneData, (_, payload) => payload.token);
$token.on(login.doneData, (_, payload) => payload.token);
