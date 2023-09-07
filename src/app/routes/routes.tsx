import CratePage from '@/pages/crate/CratePage';
import CratesPage from '@/pages/crates/CratesPage';
import HomePage from '@/pages/home/HomePage';
import InventoryPage from '@/pages/inventory/InventoryPage';
import { CRATES_ROUTE, HOME_ROUTE, INVENTORY_ROUTE } from './paths';

export type RouteType = {
  path: string;
  Component: () => JSX.Element;
};

export const publicRoutes: RouteType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
];

export const authRoutes: RouteType[] = [
  {
    path: CRATES_ROUTE,
    Component: CratesPage,
  },
  {
    path: CRATES_ROUTE + '/:id',
    Component: CratePage,
  },
  {
    path: INVENTORY_ROUTE,
    Component: InventoryPage,
  },
];
