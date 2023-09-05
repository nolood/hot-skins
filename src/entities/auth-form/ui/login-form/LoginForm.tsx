import { Button, Input } from '@/shared/ui';
import { ChangeEvent, FormEvent, useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <form className='flex flex-col gap-6 max-w-[500px] w-full' onSubmit={handleSubmit}>
      <Input
        name='email'
        placeholder='Email'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        value={username}
      />
      <Input
        name='password'
        placeholder='Password'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        value={password}
      />
      <Button title='Авторизоваться' className='py-3' type='submit' />
    </form>
  );
};

export default LoginForm;
