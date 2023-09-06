import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button>{children}</Menu.Button>
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
