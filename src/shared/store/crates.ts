import { fetchCrateFx, fetchCratesFx } from '@/feature/api/cratesApi';
import { createStore } from 'effector';

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

export const $currentCrate = createStore<Crate | null>(null);

$currentCrate.on(fetchCrateFx.doneData, (_, data) => data);

export const $crates = createStore<CratesStore>({ data: [] });

$crates.on(fetchCratesFx.doneData, (state, data) => ({
  ...state,
  data,
}));
