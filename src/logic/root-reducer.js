import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from '@/logic/example/ducks/example-slice';
import authReducer from '@/logic/authentication/ducks/auth-slice';

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
});

export default rootReducer;
