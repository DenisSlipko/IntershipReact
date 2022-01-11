import { put, takeLatest } from 'redux-saga/effects';

import { LOGIN_USER, LOGOUT_USER } from '../actions/types/authorization.types';
import { loginUserSuccess, loginUserFailure, logoutUserSuccess, logoutUserFailure } from '../actions/authorization.actions';
import { UserData, TOKEN } from '../../constants/constants'

export function* loginUserSaga({ values }) {
  try {
    if(values.login === UserData.login && values.password === UserData.password) {
      yield put(loginUserSuccess(TOKEN));
      localStorage.setItem("token", TOKEN);
    }
  } catch (error) {
    yield put(loginUserFailure(error));
  }
}

export function* logoutUserSaga() {
  try {
      yield put(logoutUserSuccess());
      localStorage.removeItem("token");
  } catch (error) {
    yield put(logoutUserFailure(error));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}
