import { register } from '@/feature/api/register';
import { simpleValidationFields } from '@/feature/lib/simpleValidationFields';
import { setTokenToApi } from '@/shared/api/api';
import { fetchUserFx, setIsAuth } from '@/shared/api/auth';
import { toggleRegModal } from '@/shared/store/modal';
import { Button, Input } from '@/shared/ui';
import { ChangeEvent, FormEvent, useState } from 'react';

const RegForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = simpleValidationFields({ username, password, repeatPassword });
    if (isValid.type === 'error') {
      setErrorMessage(isValid.message);
    } else {
      const isReg = await register({ username, password });
      if (isReg.auth) {
        setTokenToApi(isReg.token);
        await fetchUserFx();
        toggleRegModal();
        setIsAuth(true);
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

  const handleChangeReppassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
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
      <Input
        name='reppassword'
        placeholder='Repeat password'
        onChange={handleChangeReppassword}
        value={repeatPassword}
      />
      {errorMessage && <span className='text-error'>{errorMessage}</span>}
      <Button className='py-3' type='submit'>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default RegForm;
