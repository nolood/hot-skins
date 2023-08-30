import Header from '@/components/layout/header/Header';
import Providers from '@/providers/Providers';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
};

export default MainLayout;
