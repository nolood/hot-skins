import { createEffect } from 'effector';
import { api } from '../api/api';
import { Inventory } from '../store/inventory';

export const fetchInventoryFx = createEffect<void, Inventory, Error>(async () => {
  try {
    const res = await api.get('/inventories/get');
    return res.data;
  } catch (e) {
    console.error(e);
  }
});
