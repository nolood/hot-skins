import { fetchCrates } from '@/feature/api/cratesApi';
import { createStore } from 'effector';

export type Crate = {
  id: string;
  name: string;
  description: string;
  image: string;
  contains: string[];
  price: number;
};

type CratesStore = {
  data: Crate[];
};

export const $crates = createStore<CratesStore>({ data: [] });

$crates.on(fetchCrates.doneData, (state, data) => ({
  ...state,
  data,
}));
