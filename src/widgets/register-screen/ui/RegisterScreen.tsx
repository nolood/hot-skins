import { RegForm } from '@/entities/auth-form';
import { Logo } from '@/shared/ui';

const RegisterScreen = () => {
  return (
    <div className='flex items-center flex-col w-full gap-10'>
      <Logo size={250} />
      <h1 className='text-textMain text-4xl font-bold'>Регистрация</h1>
      <RegForm />
    </div>
  );
};

export default RegisterScreen;
