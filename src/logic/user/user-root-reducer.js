import { combineReducers } from '@reduxjs/toolkit';
import getUserReducer from './ducks/get-user-slice';
import getUsersReducer from './ducks/get-users-slice';

const userRootReducer = combineReducers({
  user: getUserReducer,
  userList: getUsersReducer,
});

export default userRootReducer;
