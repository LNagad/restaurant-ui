import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // not-authenticated, checking
    uid: null,
    email: null,
    displayName: null,
    role: null,
    token: null,
    photoURL: null,
    errorMessage: null,
    errorInput: null,
  },
  reducers: {
    checkingCredentials: (state) =>  {
      state.status = 'checking';
    },
    login: ( state, {payload} ) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.name;
      state.role = payload.role;
      state.token = payload.token;
      state.photoURL = null;
    },
    logout: ( state, { payload } ) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.role = null;
      state.token = null;
      state.errorMessage = payload?.errorMessages ?? null;
      
    }
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions;

