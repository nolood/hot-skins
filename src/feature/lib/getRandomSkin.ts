export const getRandomSkin = ({ count }: { count: number }) => {
  return Math.floor(Math.random() * (count - 5)) + 5;
};
