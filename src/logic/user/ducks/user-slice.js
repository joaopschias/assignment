import { createSlice } from '@reduxjs/toolkit';
import User from '../models/user-model';

const initialState = {
  user: new User(),
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest: state => ({
      ...state,
      loading: true,
    }),
    fetchUserSuccess: (state, action) => ({
      ...state,
      loading: false,
      user: new User(...action.payload),
      error: null,
    }),
    fetchUserFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
