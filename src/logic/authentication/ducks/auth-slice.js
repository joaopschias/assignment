import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => ({
      ...state,
      loading: true,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      loading: false,
      token: action.payload.token,
      error: null,
    }),
    loginFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
