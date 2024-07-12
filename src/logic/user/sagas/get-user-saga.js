import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../ducks/get-user-slice';
import fetchUserApi from '../api/user-api';
import User from '../models/user-model';

const fetchUserSaga = function* fetchUserSaga(action) {
  try {
    const userResponse = yield call(fetchUserApi, action.payload);
    const user = User.fromPlainObject(userResponse);
    yield put(fetchUserSuccess(user.toPlainObject()));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
};

const watchFetchUserSaga = function* watchFetchUserSaga() {
  yield takeEvery(fetchUserRequest.type, fetchUserSaga);
};

export default watchFetchUserSaga;
