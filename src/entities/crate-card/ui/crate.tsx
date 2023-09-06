import { FC } from 'react';

interface ICrateProps {
  title: string;
  id: string;
  price: number;
  image: string;
}

const Crate: FC<ICrateProps> = ({ title, id, price, image }) => {
  return (
    <div className='flex flex-col items-center w-[400px] justify-between rounded-xl py-2' key={id}>
      <img className='w-[200px] h-[130px]' src={image} alt={title} />
      <span className='text-center text-textMain my-4'>{title}</span>
      <span className='text-textMain bg-accent rounded-xl p-1 font-bold'>{price} $</span>
    </div>
  );
};

export default Crate;
