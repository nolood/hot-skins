import { fetchCrateFx } from '@/feature/api/cratesApi';
import { shuffleArray } from '@/shared/lib/shuffleArray';
import { $currentCrate } from '@/shared/store/crates';
import { Button, Loader } from '@/shared/ui';
import { CrateSkinsList, CrateTape } from '@/widgets/crate/ui';
import { useStore } from 'effector-react/compat';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CratePage = () => {
  const params = useParams();
  const currentCrate = useStore($currentCrate);
  const navigate = useNavigate();
  const isLoading = useStore(fetchCrateFx.pending);

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
        </div>
        <CrateSkinsList items={currentCrate?.contains} />
      </div>
    </section>
  );
};

export default CratePage;
