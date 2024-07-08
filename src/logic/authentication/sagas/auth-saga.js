import { call, put, takeEvery } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../ducks/auth-slice';
import loginApi from '../api/auth-api';

function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess({ token: response.token }));
    window.location.href = '/dashboard';
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* watchLoginSaga() {
  yield takeEvery(loginRequest.type, loginSaga);
}

export default watchLoginSaga;
