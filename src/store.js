import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import axios from './api/axios';  // Import your enhanced Axios instance

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
