import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/logic/authentication/ducks/auth-slice';
import headerReducer from '@/logic/header/ducks/header-slice';
import footerReducer from '@/logic/footer/ducks/footer-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  footer: footerReducer,
});

export default rootReducer;
