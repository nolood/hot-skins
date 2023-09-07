import { fetchCrateFx } from '@/feature/api/cratesApi';
import { CrateTape } from '@/widgets/crate/ui';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CratePage = () => {
  const params = useParams();

  useEffect(() => {
    fetchCrateFx(params.id as string);
  }, []);

  return (
    <section className='section min-h-[calc(100vh-76px-48px)] bg-main'>
      <div className='container'>
        <div className='py-12'>
          <CrateTape />
        </div>
      </div>
    </section>
  );
};

export default CratePage;
