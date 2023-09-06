import { CRATES_ROUTE } from '@/app/routes/paths';
import { login } from '@/feature/api/login';
import { simpleValidationFields } from '@/feature/lib/simpleValidationFields';
import { setIsAuth } from '@/shared/api/auth';
import { Button, Input } from '@/shared/ui';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = simpleValidationFields({ username, password });
    if (isValid.type === 'error') {
      setErrorMessage(isValid.message);
    } else {
      if (await login({ username, password })) {
        setIsAuth(true);
        navigate(CRATES_ROUTE);
      } else {
        setErrorMessage('Неверный логин или пароль');
      }
    }
  };

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setErrorMessage('');
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  return (
    <form className='flex flex-col gap-6 max-w-[500px] w-full' onSubmit={handleSubmit}>
      <Input
        name='username'
        placeholder='Username'
        onChange={handleChangeUsername}
        value={username}
      />
      <Input
        name='password'
        placeholder='Password'
        onChange={handleChangePassword}
        value={password}
      />
      {errorMessage && <span className='text-error'>{errorMessage}</span>}
      <Button className='py-3' type='submit'>
        Авторизоваться
      </Button>
    </form>
  );
};

export default LoginForm;
