import { all } from 'redux-saga/effects';
import watchLoginSaga from '@/logic/authentication/sagas/auth-saga';
import userRootSaga from '@/logic/user/user-root-saga';

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    userRootSaga(), // Inclua o userRootSaga
  ]);
}
