import { $regModal, toggleRegModal } from '@/shared/store/modal'
import { Button, Modal } from '@/shared/ui'
import { RegisterScreen } from '@/widgets'
import { useStore } from 'effector-react/effector-react.umd'

const HomePage = () => {
  const isOpen = useStore($regModal);
  const setIsOpen = toggleRegModal;
  return (
    <section className='section bg-home-bg h-[calc(100vh-76px-48px)] bg-center bg-no-repeat bg-cover'>
      <div className='container'>
        <div className='pt-[118px]'>
          <h1 className='text-textMain text-6xl font-bold w-[700px] mb-10'>
            Открывайте кейсы играйте в мини-игры, а также многое другое
          </h1>
          <Button className='py-5 px-12' onClick={() => setIsOpen()} variant='primary'>
            Зарегистрироваться
          </Button>
          <Modal open={isOpen} setOpen={setIsOpen}>
            <RegisterScreen />
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
