import { fetchCrateFx } from '@/feature/api/cratesApi';
import { shuffleArray } from '@/shared/lib/shuffleArray';
import { $currentCrate } from '@/shared/store/crates';
import { $resultModal, toggleResultModal } from '@/shared/store/modal';
import { Button, Loader, Modal } from '@/shared/ui';
import { CrateOpenResult, CrateSkinsList, CrateTape } from '@/widgets/crate/ui';
import { useStore } from 'effector-react/compat';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CratePage = () => {
  const params = useParams();
  const currentCrate = useStore($currentCrate);
  const navigate = useNavigate();
  const isLoading = useStore(fetchCrateFx.pending);

  const isOpen = useStore($resultModal);
  const setIsOpen = toggleResultModal;

  useEffect(() => {
    fetchCrateFx(params.id as string);
  }, []);

  const shuffleItems = shuffleArray(currentCrate?.contains || []);

  return (
    <section className='section min-h-[calc(100vh-76px-48px)] bg-main'>
      <div className='container'>
        <Button onClick={() => navigate(-1)} className='mt-6 py-2 px-6'>
          Назад
        </Button>
        <div className='py-6'>
          {isLoading ? (
            <div className='flex justify-center items-center w-full h-full'>
              <Loader />
            </div>
          ) : (
            <CrateTape items={currentCrate?.contains} shuffleItems={shuffleItems} />
          )}
          <Modal
            className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-2/3 shadow-shadow shadow-disabled'
            open={isOpen}
            setOpen={setIsOpen}
          >
            <CrateOpenResult />
          </Modal>
        </div>
        <CrateSkinsList items={currentCrate?.contains} />
      </div>
    </section>
  );
};

export default CratePage;
