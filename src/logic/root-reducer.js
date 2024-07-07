import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/logic/authentication/ducks/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
