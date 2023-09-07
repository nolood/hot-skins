import { SkinColor } from '@/shared/lib/SkinColor';
import { CrateContains } from '@/shared/store/crates';

const CrateSkinCard = ({ item }: { item: CrateContains }) => {
  return (
    <div className='flex flex-col items-center bg-substrate rounded-xl w-[200px]'>
      <img src={item.image} alt={item.name} className='w-[130px] h-[120px]' />
      <h3 className='text-center text-textMain'>{item.name}</h3>
      <div className={`w-[50px] h-[10px] rounded-t-xl mt-6 ${SkinColor[item.rarity]}`}></div>
    </div>
  );
};

export default CrateSkinCard;
