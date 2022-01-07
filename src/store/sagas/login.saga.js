import { put, takeLatest } from 'redux-saga/effects';

import { LOGIN_USER } from '../actions/types/login.types';
import { setSuccessLogin, setFailureLogin } from '../actions/login.actions';
import { isDataMatch } from '../../loginValidator';
import { UserData, TOKEN } from '../../constants/constants'

export function* loginUserSaga({values}) {
  try {
    const isLogin = isDataMatch(values, UserData); 
    if(isLogin) {
      yield put(setSuccessLogin(TOKEN));
      localStorage.setItem("token", TOKEN);
    }
  } catch (error) {
    yield put(setFailureLogin(error));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
}
