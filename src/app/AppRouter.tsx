import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

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
