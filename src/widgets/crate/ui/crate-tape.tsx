import { getRandomSkin } from '@/feature/lib/getRandomSkin';
import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import { shuffleArray } from '@/shared/lib/shuffleArray';
import { CrateContains } from '@/shared/store/crates';
import { Button } from '@/shared/ui';
import { useRef } from 'react';
import styles from '../styles/Triangle.module.scss';

const CrateTape = ({ items }: { items?: CrateContains[] }) => {
  const skin = useRef<HTMLDivElement | null>(null);

  if (!items) {
    return null;
  }

  const result = getRandomSkin({ count: items.length * 2 });
  const handleScrollToElement = () => {
    skin.current?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div className={styles.triangle}></div>
      <div className='flex gap-6 overflow-hidden w-full mb-4'>
        {shuffleArray(items).map((item, index) => (
          <CrateSkinCard key={item.id} item={item} ref={result === index ? skin : null} />
        ))}
      </div>
      <Button onClick={handleScrollToElement} className='py-2 px-6 mt-12'>
        Открыть
      </Button>
    </div>
  );
};

export default CrateTape;
