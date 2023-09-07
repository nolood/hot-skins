import { createEffect } from 'effector';
import { api } from '../api/api';
import { Inventory } from '../store/inventory';

export const addToInventory = createEffect<{ skinId: string; crateId: string }, Inventory, void>(
  async (params) => {
    try {
      const response = await api.post(`/inventories/add/${params.skinId}/crate/${params.crateId}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
);
