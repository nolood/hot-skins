import HomePage from '@/pages/home/HomePage';
import { HOME_ROUTE } from './paths';

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
