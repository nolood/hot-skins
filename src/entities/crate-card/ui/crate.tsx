import { CRATES_ROUTE } from '@/app/routes/paths';
import LocaleNumbers from '@/shared/lib/localeNumber';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './../styles/crate.module.scss';

interface ICrateProps {
  title: string;
  id: string;
  price: number;
  image: string;
}

const Crate: FC<ICrateProps> = ({ title, id, price, image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(CRATES_ROUTE + `/${id}`);
  };
  return (
    <div
      className={
        'flex flex-col items-center w-[200px] justify-between rounded-xl py-2 ' + styles.crate
      }
      onClick={handleClick}
    >
      <img className='w-[200px] h-[130px]' src={image} alt={title} />
      <span className='text-center text-textMain my-4'>{title}</span>
      <span className='text-main bg-accent rounded-xl p-1 px-3 font-bold'>
        {LocaleNumbers({ currencyIcon: true, number: price })}
      </span>
    </div>
  );
};

export default Crate;
