import { SkinColor } from '@/shared/lib/SkinColor';
import { CrateContains } from '@/shared/store/crates';

const CrateSkinCard = ({ item, className }: { item: CrateContains; className?: string }) => {
  return (
    <div
      className={
        'flex flex-col items-center bg-substrate rounded-xl min-w-[250px] min-h-[300px] pt-4 justify-between ' +
        className
      }
    >
      <img src={item.image} alt={item.name} className='w-[130px] h-[120px]' />
      <h3 className='text-center text-textMain'>{item.name}</h3>
      <div
        className={`w-[50px] h-[10px] rounded-t-xl mt-6 ${
          SkinColor[item.rarity] ? SkinColor[item.rarity] : 'bg-accent shadow-accent'
        }`}
      ></div>
    </div>
  );
};

export default CrateSkinCard;
