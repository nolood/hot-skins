import axios from 'axios';
import { getToken } from '../lib';
const token = getToken();

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: { Authorization: `Bearer ${token}` },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use((error) => {
  if (error.status === 401) {
    localStorage.removeItem('token');
    location.replace('/');
  }
  return error;
});
