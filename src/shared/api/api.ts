import axios from 'axios';

// const token = getToken();

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      // location.replace('/');
    }
  },
);

export const setTokenToApi = (token?: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
