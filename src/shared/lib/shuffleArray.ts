import { CrateContains } from '../store/crates';

export const shuffleArray = (array: CrateContains[]) => {
  if (!Array.isArray(array)) return [];
  const shuffledArray = [...array];

  function getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = getRandomIndex(i + 1);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
