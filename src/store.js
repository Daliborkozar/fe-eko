import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import { apiSlice } from './redux/apiSlice'

export const store = configureStore({
  reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware),
      //if production devtools turn to false
  devTools: true
})
