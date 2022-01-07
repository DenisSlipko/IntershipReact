import { put, takeLatest } from 'redux-saga/effects';

import { LOGOUT_USER } from '../actions/types/login.types';
import { setSuccessLogout, setFailureLogout } from '../actions/login.actions';

export function* logoutUserSaga() {
  try {
      yield put(setSuccessLogout());
      localStorage.removeItem("token");
  } catch (error) {
    yield put(setFailureLogout(error));
  }
}

export default function* watchLogoutSaga() {
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}
