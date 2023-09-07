import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import { CrateContains } from '@/shared/store/crates';

const CrateSkinsList = ({ items }: { items?: CrateContains[] }) => {
  if (!items) {
    return null;
  }

  return (
    <div className='grid gap-4 grid-cols-5 py-12 '>
      {items.map((item) => (
        <CrateSkinCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CrateSkinsList;
