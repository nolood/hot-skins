import { $isAuth, $user, fetchUserFx } from '@/shared/api/auth';
import { $loginModal, toggleLoginModal } from '@/shared/store/modal';
import { Button, Dropdown, Logo, Modal } from '@/shared/ui';
import { NavbarItems } from '@/widgets/lib/consts/NavbarItems';
import { useStore } from 'effector-react/effector-react.mjs';
import { Link } from 'react-router-dom';
import { LoginScreen } from '..';
import { NavbarItemsProtected } from '../lib/consts/NavbarItemsProtected';

const Header = () => {
  const isOpen = useStore($loginModal);
  const isAuth = useStore($isAuth);
  const user = useStore($user);
  const isLoading = useStore(fetchUserFx.pending);
  const setIsOpen = toggleLoginModal;
  return (
    <section className='section h-[76px] bg-substrate'>
      <div className='container fixed left-1/2 -translate-x-1/2 top-0 backdrop-blur-md z-10'>
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
              {NavbarItems.map(({ title, id, path }) => (
                <li key={id} className='text-textMain font-medium'>
                  <Link to={path}>{title}</Link>
                </li>
              ))}
              {isAuth &&
                NavbarItemsProtected.map(({ title, id, path }) => (
                  <li key={id} className='text-textMain font-medium'>
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className='flex items-center'>
            {!isAuth ? (
              <Button onClick={() => toggleLoginModal()} className='ml-8 text-lg py-2 px-6'>
                Войти
              </Button>
            ) : (
              <Dropdown>
                {isLoading ? (
                  <>
                    <span>.......</span>
                    <div className='h-[15px] w-[3px] bg-accent mx-4'></div>
                    <span>.......</span>
                  </>
                ) : (
                  <>
                    {user?.username} <div className='h-[15px] w-[3px] bg-accent mx-4'></div>
                    {user?.balance}$
                  </>
                )}
              </Dropdown>
            )}
          </div>
        </div>
        <Modal open={isOpen} setOpen={setIsOpen}>
          <LoginScreen />
        </Modal>
      </div>
    </section>
  );
};

export default Header;
