import { createStore } from 'effector';
import { addToInventory } from '../lib/addToInventory';
import { fetchInventoryFx } from '../lib/fetchInventory';
import { sellSkinFx } from '../lib/sellSkin';
import { InventoryItem } from './crates';

export type Inventory = {
  id: number;
  userId: number;
  summary: number;
  items: InventoryItem[];
  count: number;
};

export const $inventory = createStore<Inventory | null>(null);

$inventory
  .on(addToInventory.doneData, (_, payload) => payload)
  .on(sellSkinFx.doneData, (state, payload) => ({
    ...(state as Inventory),
    items: state?.items?.filter((item) => item.id !== payload.skinId) as InventoryItem[],
  }))
  .on(fetchInventoryFx.doneData, (_, payload) => payload);
