import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import authReducer from './slice/authSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
