import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Providers from '@/providers/Providers';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
};

export default MainLayout;
