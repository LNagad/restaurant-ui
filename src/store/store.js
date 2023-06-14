import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth';
import { restaurantSlice } from './slices/restaurant';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    restaurant: restaurantSlice.reducer
  }
});