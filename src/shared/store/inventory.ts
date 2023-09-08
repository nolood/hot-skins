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
  .on(sellSkinFx.doneData, (state, payload) => {
    const skin = state?.items.find((item) => item.id === payload.skinId);
    if (skin?.count && skin.count > 1) {
      return {
        ...(state as Inventory),
        items: state?.items.map((item) =>
          item.id === payload.skinId ? { ...item, count: item.count - 1 } : item,
        ) as InventoryItem[],
      };
    }
    return {
      ...(state as Inventory),
      items: state?.items.filter((item) => item.id !== payload.skinId) as InventoryItem[],
    };
  })
  .on(fetchInventoryFx.doneData, (_, payload) => payload);
