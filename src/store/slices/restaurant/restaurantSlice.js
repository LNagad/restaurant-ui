import { createSlice } from '@reduxjs/toolkit';

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    activeView: 'DashBoard',
    isLoading: true,
    isSideBarOpen: false,
    restaurantData: null,
  },
  reducers: {
    loadRestaurantData: (state, {payload}) => {
      state.restaurantData = payload;
    },
    changeView: (state, {payload}) => {
      state.activeView = payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    togleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  }
});

export const { changeView, startLoading, endLoading, togleSideBar, loadRestaurantData } = restaurantSlice.actions;

export default restaurantSlice.reducer;