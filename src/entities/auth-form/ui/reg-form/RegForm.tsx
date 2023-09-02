import { Button, Input } from '@/shared/ui';

const RegForm = () => {
  return (
    <form className='flex flex-col gap-6 max-w-[500px] w-full'>
      <Input name='email' placeholder='Email' />
      <Input name='password' placeholder='Password' />
      <Input name='reppassword' placeholder='Repeat password' />
      <Button title='Зарегистрироваться' className='py-3' type='submit' />
    </form>
  );
};

export default RegForm;
