import { all } from 'redux-saga/effects';
import exampleSaga from '@/logic/example/sagas/example-saga';
import watchLoginSaga from '@/logic/authentication/sagas/auth-saga';

export default function* rootSaga() {
  yield all([exampleSaga(), watchLoginSaga()]);
}
