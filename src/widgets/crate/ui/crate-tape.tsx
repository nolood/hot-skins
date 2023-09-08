import { CrateContainsUniq, findLastIndexOfObjectInArray } from '@/feature/lib/findLastIndexOfSkin';
import { getRandomSkin } from '@/feature/lib/getRandomSkin';
import CrateSkinCard from '@/feature/ui/crate/crate-skin-card';
import { $user } from '@/shared/api/auth';
import { addToInventory } from '@/shared/lib/addToInventory';
import { openCrateFx } from '@/shared/lib/openCrate';
import sound from '@/shared/sounds/crate.mp3';
import { $currentCrate, CrateContains, setCrateResult } from '@/shared/store/crates';
import { toggleResultModal } from '@/shared/store/modal';
import { Button } from '@/shared/ui';
import { useStore } from 'effector-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Triangle.module.scss';

const CrateTape = ({
  items,
  shuffleItems,
}: {
  items?: CrateContains[];
  shuffleItems: CrateContainsUniq[];
}) => {
  const [disable, setDisable] = useState<boolean>();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const controls = useAnimation();
  const currentCrate = useStore($currentCrate);
  const user = useStore($user);

  useEffect(() => {
    if (user && currentCrate) {
      setDisable(user.balance <= currentCrate.price);
    }
    window.scrollTo(0, 0);
  }, []);

  if (!shuffleItems || !items) {
    return null;
  }

  const handleScrollToElement = async () => {
    audioRef.current?.play();
    setDisable(true);
    const skin = getRandomSkin({ items }).id;
    const skinIndex = findLastIndexOfObjectInArray(shuffleItems, skin);
    const offset = -250 * (skinIndex - 2.2);
    setCrateResult({ ...shuffleItems[skinIndex], crate: String(currentCrate?.id) });
    await openCrateFx({ id: currentCrate?.id || '' });
    await addToInventory({ skinId: skin, crateId: currentCrate?.id || '' });
    controls.start({
      translateX: offset,
    });
  };

  const onCompleteAnimation = () => {
    toggleResultModal();
    setDisable(false);
    setTimeout(() => {
      controls.set({ translateX: 0 });
    }, 1500);
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div className={styles.triangle}></div>
      <div className='w-full overflow-hidden'>
        <motion.div
          animate={controls}
          transition={{ duration: 9, type: 'tween' }}
          onAnimationComplete={onCompleteAnimation}
          className='flex'
        >
          {shuffleItems.map((item) => (
            <CrateSkinCard key={item.uniqueId} item={item} />
          ))}
        </motion.div>
      </div>
      <audio ref={audioRef}>
        <source src={sound} type='audio/mpeg' />
        <p>Your browser does not support the audio element.</p>
      </audio>
      <Button disabled={disable} onClick={handleScrollToElement} className='py-2 px-6 mt-12'>
        Открыть - {currentCrate?.price}$
      </Button>
    </div>
  );
};

export default CrateTape;
