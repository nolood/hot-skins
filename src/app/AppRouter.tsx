import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes/routes';

const AppRouter = () => {
  const isAuth = true;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path='*' element={<>Notfound</>} />
    </Routes>
  );
};

export default AppRouter;
