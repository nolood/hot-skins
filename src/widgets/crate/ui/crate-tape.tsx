import { CrateContainsUniq, findLastIndexOfObjectInArray } from '@/feature/lib/findLastIndexOfSkin';
import { getRandomSkin } from '@/feature/lib/getRandomSkin';
import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import { CrateContains } from '@/shared/store/crates';
import { Button } from '@/shared/ui';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/Triangle.module.scss';

const CrateTape = ({
  items,
  shuffleItems,
}: {
  items?: CrateContains[];
  shuffleItems: CrateContainsUniq[];
}) => {
  const [disable, setDisable] = useState<boolean>();
  const controls = useAnimation();

  if (!shuffleItems || !items) {
    return null;
  }

  const handleScrollToElement = () => {
    setDisable(true);
    const skin = getRandomSkin({ items }).id;
    const skinIndex = findLastIndexOfObjectInArray(shuffleItems, skin);
    const offset = -250 * (skinIndex - 2.2);
    console.log(shuffleItems[skinIndex]);
    controls.start({
      translateX: offset,
    });
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div className={styles.triangle}></div>
      <div className='w-full overflow-hidden'>
        <motion.div
          animate={controls}
          transition={{ duration: 8, type: 'tween' }}
          onAnimationComplete={() => setDisable(false)}
          className='flex'
        >
          {shuffleItems.map((item) => (
            <CrateSkinCard key={item.uniqueId} item={item} />
          ))}
        </motion.div>
      </div>
      <Button disabled={disable} onClick={handleScrollToElement} className='py-2 px-6 mt-12'>
        Открыть
      </Button>
    </div>
  );
};

export default CrateTape;
