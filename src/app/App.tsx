import { Suspense } from 'react';
import AppRouter from './AppRouter';
import MainLayout from './layouts/MainLayout';
import './styles/globals.scss';

function App() {
  return (
    <Suspense fallback={<MainLayout>loading...</MainLayout>}>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Suspense>
  );
}

export default App;
