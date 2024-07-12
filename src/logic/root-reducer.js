import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/logic/authentication/ducks/auth-slice';
import headerReducer from '@/logic/header/ducks/header-slice';
import footerReducer from '@/logic/footer/ducks/footer-slice';
import userRootReducer from '@/logic/user/user-root-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  footer: footerReducer,
  user: userRootReducer,
});

export default rootReducer;
