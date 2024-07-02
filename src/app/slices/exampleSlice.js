import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    increment: state => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement: state => {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    fetchExampleDataRequest: state => {
      return {
        ...state,
        status: 'loading',
      };
    },
    fetchExampleDataSuccess: (state, action) => {
      return {
        ...state,
        status: 'succeeded',
        data: action.payload,
      };
    },
    fetchExampleDataFailure: (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    },
  },
});

export const {
  increment,
  decrement,
  fetchExampleDataRequest,
  fetchExampleDataSuccess,
  fetchExampleDataFailure,
} = exampleSlice.actions;

export default exampleSlice.reducer;
