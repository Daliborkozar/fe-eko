import axios from 'axios';
import { selectCurrentToken, setCredentials, logOut } from '../redux/authSlice';
import store from '../store';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001',
});

export const axiosAuth = axios.create({
    baseURL: 'http://localhost:5001',
  });

  axiosAuth.interceptors.request.use((config) => {
    const authToken = selectCurrentToken(store.getState());
    if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
  })

