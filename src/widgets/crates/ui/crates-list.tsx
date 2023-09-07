import { CrateCard } from '@/entities/crate-card/ui';
import { fetchCratesFx } from '@/feature/api/cratesApi';
import { $crates } from '@/shared/store/crates';
import { Loader } from '@/shared/ui';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

const CratesList = () => {
  const data = useStore($crates).data;
  const isLoading = useStore(fetchCratesFx.pending);
  useEffect(() => {
    fetchCratesFx();
  }, []);
  return (
    <div className='flex flex-wrap justify-between gap-32 py-[100px]'>
      {!isLoading &&
        data?.map((item) => (
          <CrateCard
            title={item.name}
            price={item.price}
            id={item.id}
            key={item.id}
            image={item.image}
          />
        ))}

      {isLoading && (
        <div className='flex justify-center items-center w-full h-full'>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default CratesList;
