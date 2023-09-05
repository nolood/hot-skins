type ValidationProps = {
  username: string;
  password: string;
  repeatPassword: string;
};

export const simpleValidationFields = ({ username, password, repeatPassword }: ValidationProps) => {
  if (repeatPassword !== undefined) {
    if (repeatPassword !== password) {
      return 'Пароли не совпадают';
    }
    if (password === '' && username === '') {
      return 'Вы должны заполнить все поля';
    }
  }
};
