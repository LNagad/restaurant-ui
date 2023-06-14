import { createSlice } from '@reduxjs/toolkit';

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    activeView: 'DashBoard'
  },
  reducers: {
    changeView: (state, {payload}) => {
      state.activeView = payload;
    }
  }
});

export const { changeView } = restaurantSlice.actions;

export default restaurantSlice.reducer;