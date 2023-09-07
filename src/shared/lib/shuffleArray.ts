import { CrateContains } from '../store/crates';

export const shuffleArray = (array: CrateContains[]) => {
  if (!Array.isArray(array)) return [];
  const shuffledArray = [];

  function getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].rarity !== 'сovert' && array[i]) {
      for (let j = 0; j < getRandomIndex(50); j++) {
        shuffledArray.push(array[i]);
      }
    } else {
      shuffledArray.push(array[i]);
    }
  }

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = getRandomIndex(i + 1);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.map((item, index) => ({ ...item, uniqueId: item.id + index }));
};
