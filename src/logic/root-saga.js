import { all } from 'redux-saga/effects';
import watchLoginSaga from '@/logic/authentication/sagas/auth-saga';

export default function* rootSaga() {
  yield all([watchLoginSaga()]);
}
