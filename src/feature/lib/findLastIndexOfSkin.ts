import { CrateContains } from '@/shared/store/crates';

interface Items extends CrateContains {
  uniqueId: string;
}

export const findLastIndexOfObjectInArray = (items: Items[], id: string) => {
  if (!Array.isArray(items)) {
    return -1;
  }

  let lastIndex = -1;

  for (let i = items.length - 1; i >= 0; i--) {
    const currentObject = items[i];
    if (currentObject.id === id && i < items.length - 3) {
      lastIndex = i;
      break;
    }
  }

  return lastIndex;
};
