import { INVENTORY_ROUTE } from '@/app/routes/paths';
import { logout } from '@/shared/lib/logout';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className=''>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='flex justify-between rounded-[50px] font-medium text-lg ease-linear duration-300 bg-transparent text-accent shadow-outline ml-8 text-lg py-2 px-6 items-center hover:bg-accent hover:text-main'>
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-main'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => navigate(INVENTORY_ROUTE)}
                    className={`${
                      active ? 'bg-violet-500 text-accent' : 'text-textMain'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm backdrop-blur-xl`}
                  >
                    Инвентарь
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active ? 'bg-violet-500 text-accent' : 'text-textMain'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm backdrop-blur-xl`}
                  >
                    Выйти
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
