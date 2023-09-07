import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import { $crateResult } from '@/shared/store/crates';
import { Button } from '@/shared/ui';
import { useStore } from 'effector-react';

const CrateOpenResult = () => {
  const result = useStore($crateResult);
  return (
    <div className='w-full h-full flex flex-col items-center py-6'>
      {!result ? <>Error</> : <CrateSkinCard className='w-[300px]' item={result} />}
      <p className='mt-12 font-bold text-center text-accent text-3xl'>{result?.price}$</p>
      <div className='w-full flex justify-center gap-6 mt-12'>
        <Button variant='secondary' className='w-[200px] py-2 px-6'>
          Продать
        </Button>
        <Button variant='secondary' className='w-[200px] py-2 px-6'>
          Открыть ещё раз
        </Button>
      </div>
    </div>
  );
};

export default CrateOpenResult;
