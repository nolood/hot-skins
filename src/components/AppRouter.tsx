import { publicRoutes } from '@/constants/routes';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path='*' element={<>Notfound</>} />
    </Routes>
  );
};

export default AppRouter;
