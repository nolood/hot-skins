import { Button, Logo, Russia } from '@/shared/ui';
import { NavbarItems } from '@/widgets/lib/consts/NavbarItems';
import { Down } from '@icon-park/react';
const Header = () => {
  return (
    <section className='section h-[73px] bg-substrate'>
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
            <div className='flex items-center text-textMain uppercase gap-4 text-lg rounded-3xl border-solid border border-borderMain py-1 px-4 font-regular'>
              <Russia />
              ru
              <Down className='text-textSecondary' />
            </div>
            <Button title='Войти' className='ml-8 text-lg py-2 px-6' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
