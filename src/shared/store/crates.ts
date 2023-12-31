import { fetchCrateFx, fetchCratesFx } from '@/feature/api/cratesApi';
import { createEvent, createStore } from 'effector';

export type Crate = {
  id: string;
  name: string;
  description: string;
  image: string;
  contains: CrateContains[];
  price: number;
};

export type CrateContains = {
  id: string;
  name: string;
  rarity: string;
  image: string;
  price: number;
};

type CratesStore = {
  data: Crate[];
};

export interface InventoryItem extends CrateContains {
  crate: string;
  count: number;
}

export const setCrateResult = createEvent<null | InventoryItem>();

export const $currentCrate = createStore<Crate | null>(null);

export const $crateResult = createStore<null | InventoryItem>(null);

export const $crates = createStore<CratesStore>({ data: [] });

$crates.on(fetchCratesFx.doneData, (state, data) => ({
  ...state,
  data,
}));
$currentCrate.on(fetchCrateFx.doneData, (_, data) => data);
$crateResult.on(setCrateResult, (_, data) => data);
