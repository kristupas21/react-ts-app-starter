import { takeLatest, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { SET_APP_LOADING } from './appConstants';

function* demoSaga(
  action: ActionType<typeof import('./appActions').setAppLoading>
) {
  // eslint-disable-next-line no-console
  yield call(console.log, `app loading is set to ${action.payload}`);
}

export default function* appSaga() {
  yield takeLatest(SET_APP_LOADING, demoSaga);
}
