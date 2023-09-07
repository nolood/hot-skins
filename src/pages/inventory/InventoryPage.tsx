import { fetchInventoryFx } from '@/shared/lib/fetchInventory';
import InventoryList from '@/widgets/inventory/inventory-list/inventory-list';
import InventoryPlate from '@/widgets/inventory/inventory-plate/inventoryplate';
import { useEffect } from 'react';

const InventoryPage = () => {
  useEffect(() => {
    fetchInventoryFx();
  }, []);
  return (
    <section className='section min-h-[calc(100vh-76px-48px)] bg-main'>
      <div className='container'>
        <div className=''>
          <InventoryPlate />
          <InventoryList />
        </div>
      </div>
    </section>
  );
};

export default InventoryPage;
