import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import { $user } from '@/shared/api/auth';
import LocaleNumbers from '@/shared/lib/localeNumber';
import { sellSkinFx } from '@/shared/lib/sellSkin';
import { $crateResult, $currentCrate } from '@/shared/store/crates';
import { toggleResultModal } from '@/shared/store/modal';
import { Button } from '@/shared/ui';
import { useStore } from 'effector-react';

const CrateOpenResult = ({ reOpen }: { reOpen: () => void }) => {
  const result = useStore($crateResult);
  const user = useStore($user);
  const currentCrate = useStore($currentCrate);

  if (!result) {
    return null;
  }

  const handleSellSkin = () => {
    sellSkinFx({ skinId: result.id, crateId: result.crate });
    toggleResultModal();
  };

  const handleOpenMore = () => {
    toggleResultModal();
    if (user && currentCrate && user?.balance >= currentCrate?.price) {
      reOpen();
    }
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center py-6'>
      <CrateSkinCard className='w-[300px]' item={result} />
      <p className='mt-12 font-bold text-center text-accent text-3xl'>
        {LocaleNumbers({ currencyIcon: true, number: result.price })}
      </p>
      <div className='w-full flex justify-center gap-6 mt-12'>
        <Button onClick={handleSellSkin} variant='secondary' className='w-[200px] py-2 px-6'>
          Продать
        </Button>
        <Button onClick={handleOpenMore} variant='secondary' className='w-[200px] py-2 px-6'>
          Открыть ещё раз
        </Button>
      </div>
    </div>
  );
};

export default CrateOpenResult;
