import { api } from '@/shared/api/api';
import { Crate } from '@/shared/store/crates';
import { createEffect } from 'effector';

export const fetchCrates = createEffect<void, Crate[], Error>(async () => {
  try {
    const res = await api.get('/crates/get');
    return res.data;
  } catch (e) {
    console.error(e);
  }
});
