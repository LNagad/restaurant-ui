import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeView: 'DashBoard',
  isLoading: true,
  isSideBarOpen: false,
  restaurantData: null,
  cartItemsCounter: 0,
  cartItems: [],
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    ...initialState
  },
  reducers: {
    loadRestaurantData: (state, { payload }) => {
      state.restaurantData = payload;
    },
    changeView: (state, { payload }) => {
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
    incrementCartItemsCounter: (state) => {
      state.cartItemsCounter += 1;
    },
    decrementCartItemsCounter: (state) => {
      state.cartItemsCounter -= 1;
    },
    addCartItem: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    removeCartItems: (state, { payload }) => {
      const cartItems = state.cartItems || [];
      state.cartItems = cartItems.filter((item) => item.id !== payload);
    },
    clearCart: (state) => {
      state.cartItemsCounter = 0;
      state.cartItems = [];
    },
    logoutRestaurant: (state) => {
      Object.assign(state, { ...initialState });
    }
  },
});

export const {
  changeView,
  startLoading,
  endLoading,
  togleSideBar,
  loadRestaurantData,
  incrementCartItemsCounter,
  decrementCartItemsCounter,
  addCartItem,
  removeCartItems,
  clearCart,
  logoutRestaurant
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
