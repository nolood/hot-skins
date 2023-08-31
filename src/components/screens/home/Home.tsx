import Modal from '@/components/common/modal/Modal';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className='section bg-home-bg h-[calc(100vh-73px-48px)] bg-center bg-no-repeat bg-cover'>
      <div className='container'>
        <div className='pt-[118px]'>
          <h1 className='text-textMain text-6xl font-bold w-[700px] mb-10'>
            Открывайте кейсы играйте в мини-игры, а также многое другое
          </h1>
          <button
            onClick={() => setIsOpen(true)}
            className='bg-btnMain rounded-[100px] text-bgMain font-bold text-lg p-6 px-12 outline-none'
          >
            Зарегистрироваться
          </button>
          <Modal open={isOpen} setOpen={setIsOpen}>
            kek
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Home;
