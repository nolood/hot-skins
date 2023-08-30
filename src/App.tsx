import '@/styles/globals.scss';
import AppRouter from './components/AppRouter';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
