import AppRouter from './AppRouter';
import MainLayout from './layouts/MainLayout';
import './styles/globals.scss';

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
