import { ModalProps } from '@/types/props/ModalProps';
import { Dialog, Transition } from '@headlessui/react';
import { Close } from '@icon-park/react';
import { FC, Fragment } from 'react';

const Modal: FC<ModalProps> = ({ open, setOpen, children }) => {
  return (
    <Transition as={Fragment} appear show={open}>
      <Dialog
        className='fixed left-0 top-0 h-screen w-screen z-30'
        as='div'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-200'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Panel className='flex items-center justify-center bg-bgMain h-full w-full relative'>
            {children}
            <button
              className='absolute top-4 right-4 w-7 h-7 bg-borderMain rounded-full flex items-center justify-center text-textMain text-sm'
              onClick={() => setOpen(false)}
            >
              <Close />
            </button>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
