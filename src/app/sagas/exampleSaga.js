import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchExampleDataRequest,
  fetchExampleDataSuccess,
  fetchExampleDataFailure,
} from '../slices/exampleSlice';

// Função para fazer a chamada à API com um atraso
function fetchExampleDataApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response =>
          response.json(),
        ),
      );
    }, 2000); // Atraso de 2 segundos
  });
}

// Worker saga: fará a chamada à API
function* fetchExampleData() {
  try {
    const data = yield call(fetchExampleDataApi);
    yield put(fetchExampleDataSuccess(data));
  } catch (error) {
    yield put(fetchExampleDataFailure(error.toString()));
  }
}

// Watcher saga: observará as ações
function* exampleSaga() {
  yield takeEvery(fetchExampleDataRequest.type, fetchExampleData);
}

export default exampleSaga;
