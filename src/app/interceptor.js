import axios from 'axios';
import { logout } from '@/logic/authentication/ducks/auth-slice';

const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setUpInterceptors = store => {
  api.interceptors.request.use(
    config => {
      const {
        auth: { token },
      } = store.getState();
      if (token) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        };
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        store.dispatch(logout());
        window.location.href = '/login';
      }
      return Promise.reject(error);
    },
  );
};

export default api;
