import { setTokenToApi } from '@/shared/api/api';
import { $isAuth, fetchUserFx, setIsAuth } from '@/shared/api/auth';
import { getToken } from '@/shared/lib';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes/routes';

const AppRouter = () => {
  const isAuth = useStore($isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    setTokenToApi(token || undefined);
    fetchUserFx();
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      navigate('/');
    }
  }, []);
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
