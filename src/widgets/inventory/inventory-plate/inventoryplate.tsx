import LocaleNumbers from '@/shared/lib/localeNumber';
import { $inventory } from '@/shared/store/inventory';
import { useStore } from 'effector-react';

const InventoryPlate = () => {
  const inventory = useStore($inventory);

  if (!inventory) {
    return null;
  }

  return (
    <div className='w-full bg-substrate rounded-b-xl py-8 px-6 flex gap-6 items-center'>
      <h1 className='text-textMain text-3xl font-bold'>Инвентарь</h1>
      <p className='text-textMain text-lg flex gap-1 items-center'>
        Сумма:
        <span className='text-accent'>
          {LocaleNumbers({ currencyIcon: true, number: inventory.summary })}
        </span>
      </p>
      <p className='text-textMain text-lg'>
        Предметов: <span className='text-accent'>{inventory?.count} шт.</span>
      </p>
    </div>
  );
};

export default InventoryPlate;
