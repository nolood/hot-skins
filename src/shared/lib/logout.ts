import { resetUser } from '../api/auth';

export const logout = async () => {
  await localStorage.removeItem('token');
  await resetUser();
  location.replace('/');
};
