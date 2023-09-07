import { CrateContains } from '@/shared/store/crates';

export const getRandomSkin = ({ items }: { items: CrateContains[] }) => {
  const rareItems = items.filter((item) => item.rarity !== 'сovert' && item);

  const randomNum = Math.floor(Math.random() * 100);

  if (randomNum <= 89 && rareItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * rareItems.length);
    return rareItems[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
};
