import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../ducks/user-slice';
import fetchUserApi from '../api/user-api';

function* fetchUserSaga(action) {
  try {
    const user = yield call(fetchUserApi, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

function* watchFetchUserSaga() {
  yield takeEvery(fetchUserRequest.type, fetchUserSaga);
}

export default watchFetchUserSaga;
