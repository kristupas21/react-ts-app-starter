import { fork } from 'redux-saga/effects';
import appSaga from './app/appSaga';

export default function* saga() {
  yield fork(appSaga);
}
