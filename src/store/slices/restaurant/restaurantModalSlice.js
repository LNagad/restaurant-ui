import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditModalOpen: false,
  currentEditData: {}
};

export const restaurantModalSlice = createSlice({
  name: 'restaurantModals',
  initialState: {
    ...initialState
  },
  reducers: {
    toggleEditModal: (state) => {
      state.isEditModalOpen = !state.isEditModalOpen;
    },
    loadEditData: (state, {payload}) => {
      console.log(payload);
      state.currentEditData = payload;
    },
    removeDish: (state, {payload}) => {
      const { dishes } = state.currentEditData;

      const updatedDishes = dishes.filter(dish => dish.id !== payload);
      const updatedSubtotal = updatedDishes.reduce((acc, dish) => acc + dish.price, 0);

      state.currentEditData.dishes = updatedDishes;
      state.currentEditData.subtotal = updatedSubtotal;
    },
    setInitialState: (state) => {
      Object.assign( state, {...initialState} );
    }

  }
});

export const { toggleEditModal, loadEditData, removeDish, setInitialState } = restaurantModalSlice.actions;

