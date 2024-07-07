import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from '@/logic/authentication/ducks/auth-slice';

function* loginSaga(action) {
  try {
    const response = yield call(axios.post, '/api/login', action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* watchLoginSaga() {
  yield takeEvery(loginRequest.type, loginSaga);
}

export default watchLoginSaga;
