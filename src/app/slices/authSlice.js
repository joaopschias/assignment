import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    loginRequest: state => {
      return {
        ...state,
        status: 'loading',
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
