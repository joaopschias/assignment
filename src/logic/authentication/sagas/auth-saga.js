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
    window.location.href = '/'; // Redireciona para a página inicial após login bem-sucedido
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* logoutSaga() {
  localStorage.removeItem('token');
  yield;
  window.location.href = '/login'; // Redireciona para a página de login após logout
}

function* watchLoginSaga() {
  yield takeEvery(loginRequest.type, loginSaga);
  yield takeEvery(logout.type, logoutSaga);
}

export default watchLoginSaga;
