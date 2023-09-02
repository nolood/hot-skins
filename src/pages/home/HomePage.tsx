import { Button, Modal } from '@/shared/ui';
import { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className='section bg-home-bg h-[calc(100vh-73px-48px)] bg-center bg-no-repeat bg-cover'>
      <div className='container'>
        <div className='pt-[118px]'>
          <h1 className='text-textMain text-6xl font-bold w-[700px] mb-10'>
            Открывайте кейсы играйте в мини-игры, а также многое другое
          </h1>
          <Button
            title='Зарегистрироваться'
            className='py-5 px-12'
            onClick={() => setIsOpen(true)}
          />
          <Modal open={isOpen} setOpen={setIsOpen}>
            kek
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
