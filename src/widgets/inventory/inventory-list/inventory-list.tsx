import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import LocaleNumbers from '@/shared/lib/localeNumber';
import { sellSkinFx } from '@/shared/lib/sellSkin';
import { InventoryItem } from '@/shared/store/crates';
import { $inventory } from '@/shared/store/inventory';
import { Button } from '@/shared/ui';
import { useStore } from 'effector-react';

const InventoryList = () => {
  const inventory = useStore($inventory);

  if (!inventory) {
    return null;
  }

  const addons = ({ item }: { item: InventoryItem }) => (
    <div className='flex flex-col items-center gap-4'>
      <span className='text-accent'>
        {LocaleNumbers({ currencyIcon: true, number: item.price })}
      </span>
      <Button
        onClick={() => sellSkinFx({ skinId: item.id, crateId: item.crate })}
        variant='secondary'
        className='text-md py-1 px-2'
      >
        Продать
      </Button>
    </div>
  );

  return (
    <div className='grid gap-4 grid-cols-5 py-12'>
      {inventory.items.map((item) => (
        <CrateSkinCard addons={<>{addons({ item })}</>} item={item} key={item.id} />
      ))}
    </div>
  );
};

export default InventoryList;
