import { put, delay } from 'redux-saga/effects';
import { setSuccessToast, setFailureToast, setDefaultToast } from '../actions/toast.actions';

export function* getSuccessToast(message, time = 2000) {
  yield put(setSuccessToast('success', message, true));
  yield delay(time);
  yield put(setDefaultToast());
}

export function* getFailureToast(error, time = 2000) {
  yield put(setFailureToast('danger', error, true));
  yield delay(time);
  yield put(setDefaultToast());
}
