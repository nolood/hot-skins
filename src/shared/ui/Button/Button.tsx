import { FC } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  title: string;
  icon?: JSX.Element;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  info?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<IButtonProps> = ({
  title,
  icon,
  variant = 'primary',
  disabled,
  info,
  onClick,
  className,
  type,
}) => {
  const combineClassNames = () => {
    const defaultClassName =
      'rounded-[50px] font-medium text-lg ease-linear duration-300 outline-none';
    if (variant === 'primary' && !disabled) {
      return `${defaultClassName} bg-accent text-main ${styles.primaryEffects} ${className}`;
    }
    if (variant === 'secondary' && !disabled) {
      return `${defaultClassName} bg-transparent text-accent border-solid border-accent border ${styles.secondaryEffects} ${className}`;
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
    <button onClick={onClick} disabled={disabled} className={combineClassNames()} type={type}>
      {icon}
      {title}
      {info}
    </button>
  );
};

export default Button;
