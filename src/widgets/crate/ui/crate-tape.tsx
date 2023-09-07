import CrateBtn from '@/feature/ui/crate/crate-btn';
import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import { shuffleArray } from '@/shared/lib/shuffleArray';
import { $currentCrate, CrateContains } from '@/shared/store/crates';
import { useStore } from 'effector-react';

const CrateTape = () => {
  const currentCrate = useStore($currentCrate);
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex gap-2 overflow-hidden w-full'>
        {shuffleArray(currentCrate?.contains as CrateContains[]).map((item) => (
          <CrateSkinCard item={item} key={item.id} />
        ))}
      </div>
      <CrateBtn />
    </div>
  );
};

export default CrateTape;
