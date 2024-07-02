import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import exampleReducer from './slices/exampleSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
