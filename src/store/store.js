import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth';
import { restaurantModalSlice, restaurantSlice } from './slices/restaurant';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    restaurant: restaurantSlice.reducer,
    restaurantModal: restaurantModalSlice.reducer
  }
});