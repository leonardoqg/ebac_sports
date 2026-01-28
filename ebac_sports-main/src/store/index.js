import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});