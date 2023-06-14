import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: ( state, action ) => {
      state.status = 'authenticated';
    },
    logout: ( state, action ) => {
      state.status = 'not-authenticated';
    }
  }
});

export const { login, logout } = authSlice.actions;

