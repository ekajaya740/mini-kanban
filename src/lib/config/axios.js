import axios from 'axios';
import Cookie from 'js-cookie';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    const token = Cookie.get(import.meta.env.VITE_COOKIE_TOKEN_KEY);
    if (token && config.url !== '/signup') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
