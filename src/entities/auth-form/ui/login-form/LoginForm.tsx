import { Button, Input } from '@/shared/ui';

const LoginForm = () => {
  return (
    <form className='flex flex-col gap-6 max-w-[500px] w-full'>
      <Input name='email' placeholder='Email' />
      <Input name='password' placeholder='Password' />
      <Button title='Авторизоваться' className='py-3' type='submit' />
    </form>
  );
};

export default LoginForm;
