import { all } from 'redux-saga/effects';
import exampleSaga from './sagas/exampleSaga';
import watchLoginSaga from './sagas/authSaga';

export default function* rootSaga() {
  yield all([exampleSaga(), watchLoginSaga()]);
}
