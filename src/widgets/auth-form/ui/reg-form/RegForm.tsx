import { Input } from '@/shared/ui';

const RegForm = () => {
  return (
    <form action='' className='flex flex-col gap-6'>
      <Input name='email' placeholder='Email' />
      <Input name='password' placeholder='Password' />
    </form>
  );
};

export default RegForm;
