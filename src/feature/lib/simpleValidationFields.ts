type ValidationProps = {
  username: string;
  password: string;
  repeatPassword?: string;
};

export const simpleValidationFields = ({ username, password, repeatPassword }: ValidationProps) => {
  if (repeatPassword !== undefined) {
    if (repeatPassword !== password) {
      return { message: 'Пароли не совпадают', type: 'error' };
    }
  }
  if (password === '' || username === '') {
    return { message: 'Вы должны заполнить все поля', type: 'error' };
  }

  return { message: 'success', type: 'success' };
};
