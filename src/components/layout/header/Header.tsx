import Logo from '@/components/common/logo/Logo';
import { NavbarItems } from '@/constants/NavbarItems';
import { Down } from '@icon-park/react';
const Header = () => {
  return (
    <section className='section bg-bgMain h-[73px] border-solid border-b border-borderSecondary'>
      <div className='container absolute left-1/2 -translate-x-1/2 top-0 backdrop-blur-md'>
        <div className='py-4 w-full flex justify-between'>
          <div className='flex gap-32'>
            <div className='flex items-center gap-4 '>
              <Logo />
              <h2 className='text-textMain text-2xl tracking-wider'>
                <span className='font-bold'>Hot</span>
                <span className='font-thin'>Skins</span>
              </h2>
            </div>
            <ul className='flex items-center gap-10'>
              {NavbarItems.map(({ title, id }) => (
                <li key={id} className='text-textMain font-medium'>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center text-textMain uppercase gap-4 text-lg rounded-3xl border-solid border border-borderMain py-1 px-4'>
              ru
              <Down className='text-textSecondary' />
            </div>
            <button className='ml-8 bg-btnMain rounded-3xl text-bgMain font-bold text-md py-2 px-6'>
              Войти
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
