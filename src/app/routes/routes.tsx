import CratePage from '@/pages/crate/CratePage';
import CratesPage from '@/pages/crates/CratesPage';
import HomePage from '@/pages/home/HomePage';
import { CRATES_ROUTE, HOME_ROUTE } from './paths';

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
];
