import { createEffect } from 'effector';
import { api } from '../api/api';
import { User } from '../types/User';

export const sellSkinFx = createEffect<
  { skinId: string; crateId: string },
  { user: User; skinId: string },
  Error
>(async (params) => {
  try {
    const response = await api.get(`/users/sell/${params.skinId}/crate/${params.crateId}`);
    const res = { user: response.data, skinId: params.skinId };
    return res;
  } catch (e) {
    console.error(e);
    throw new Error(e as string);
  }
});
