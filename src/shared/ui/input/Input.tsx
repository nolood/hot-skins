import { FC } from 'react';

interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
}

const Input: FC<InputProps> = ({ label, name, type, placeholder }) => {
  return (
    <div className='flex flex-col'>
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='bg-main text-textMain border border-solid border-border outline-none rounded-[50px] px-5 py-3 w-full focus:outline-accent outline-solid outline'
      />
    </div>
  );
};

export default Input;
