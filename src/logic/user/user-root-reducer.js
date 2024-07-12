import { combineReducers } from '@reduxjs/toolkit';
import getUserDetailsReducer from './ducks/get-user-slice';
import getUsersReducer from './ducks/get-users-slice';

const userRootReducer = combineReducers({
  userList: getUsersReducer,
  userDetails: getUserDetailsReducer,
});

export default userRootReducer;
