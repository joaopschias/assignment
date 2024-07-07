import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/logic/authentication/ducks/auth-slice';
import userReducer from '@/logic/user/ducks/user-slice';
import headerReducer from '@/logic/header/ducks/header-slice';
import footerReducer from '@/logic/footer/ducks/footer-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  header: headerReducer,
  footer: footerReducer,
});

export default rootReducer;
