import Footer from '@/widgets/footer/Footer';
import Header from '@/widgets/header/Header';
import Providers from '@/app/providers/Providers';

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
