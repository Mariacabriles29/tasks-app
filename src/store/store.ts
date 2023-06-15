import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    /*aqui se hace referencia a los slices reducer */
    auth: authSlice.reducer,
  },
})