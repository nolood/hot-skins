import { CrateCard } from '@/entities/crate-card/ui';
import { fetchCrates } from '@/feature/api/cratesApi';
import { $crates } from '@/shared/store/crates';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

const CratesList = () => {
  const data = useStore($crates).data;
  console.log(data);
  useEffect(() => {
    fetchCrates();
  }, []);
  return (
    <div className='flex flex-wrap justify-between gap-6 py-[100px]'>
      {data.map((item) => (
        <CrateCard
          title={item.name}
          price={item.price}
          id={item.id}
          key={item.id}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CratesList;
