import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} from '../ducks/auth-slice';
import loginApi from '../api/auth-api';

function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess({ token: response.token }));
    localStorage.setItem('token', response.token);
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logoutSaga() {
  localStorage.removeItem('token');
  yield;
}

function* watchLoginSaga() {
  yield takeEvery(loginRequest.type, loginSaga);
  yield takeEvery(logout.type, logoutSaga);
}

export default watchLoginSaga;
