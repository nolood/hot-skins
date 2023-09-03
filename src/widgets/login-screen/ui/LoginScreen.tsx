import { LoginForm } from '@/entities/auth-form';
import { Logo } from '@/shared/ui';

const LoginScreen = () => {
  return (
    <div className='flex items-center flex-col w-full gap-10'>
      <Logo size={250} />
      <h1 className='text-textMain text-4xl font-bold'>Авторизация</h1>
      <LoginForm />
    </div>
  );
};

export default LoginScreen;
