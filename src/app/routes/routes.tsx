import HomePage from '@/pages/home/HomePage';
import { RouteType } from '@/types/RouteType';
import { HOME_ROUTE } from './paths';

export const publicRoutes: RouteType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
];
