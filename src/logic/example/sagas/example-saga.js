import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchExampleDataRequest,
  fetchExampleDataSuccess,
  fetchExampleDataFailure,
} from '@/logic/example/ducks/example-slice';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Function to make the API call with a delay
function fetchExampleDataApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        axios.get(`${API_BASE_URL}/users`).then(response => response.data),
      );
    }, 2000); // 2 seconds delay
  });
}

// Worker saga: will perform the API call
function* fetchExampleData() {
  try {
    const data = yield call(fetchExampleDataApi);
    yield put(fetchExampleDataSuccess(data));
  } catch (error) {
    yield put(fetchExampleDataFailure(error.toString()));
  }
}

// Watcher saga: will watch for actions
function* exampleSaga() {
  yield takeEvery(fetchExampleDataRequest.type, fetchExampleData);
}

export default exampleSaga;
