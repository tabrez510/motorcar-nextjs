import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logOutUser: (state) => {
      state.user = null;
    },
  },
});

export const { logInUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
