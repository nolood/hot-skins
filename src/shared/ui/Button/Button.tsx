import { FC } from 'react';

interface IButtonProps {
  title: string;
  icon?: JSX.Element;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  info?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IButtonProps> = ({
  title,
  icon,
  variant = 'primary',
  disabled,
  info,
  onClick,
  className,
}) => {
  const combineClassNames = () => {
    const defaultClassName =
      'rounded-[50px] font-medium text-lg hover:opacity-80 ease-linear duration-300 focus:opacity-80 outline-none';
    if (variant === 'primary' && !disabled) {
      return `${defaultClassName} bg-accent text-main ${className}`;
    }
    if (variant === 'secondary' && !disabled) {
      return `${defaultClassName} bg-transparent text-accent border-solid border-accent border ${className}`;
    }
    if (variant === 'primary' && disabled) {
      return `${defaultClassName} bg-disabled text-textSecondary cursor-not-allowed ${className}`;
    }
    if (variant === 'secondary' && disabled) {
      return `${defaultClassName} bg-transparent text-disabled border-solid border border-disabled cursor-not-allowed ${className}`;
    }
    return `${defaultClassName} ${className}`;
  };

  return (
    <button onClick={onClick} disabled={disabled} className={combineClassNames()}>
      {icon}
      {title}
      {info}
    </button>
  );
};

export default Button;
