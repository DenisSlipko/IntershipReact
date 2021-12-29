import { put } from 'redux-saga/effects';
import { setSuccessToast, setFailureToast, setDefaultToast } from '../actions/toast.actions';

export function* getSuccessToast(message, delay = 2000) {
  yield put(setSuccessToast('success', message, true));
  yield delay(delay);
  yield put(setDefaultToast());
}

export function* getFailureToast(error, delay = 2000) {
  yield put(setFailureToast('danger', error, true));
  yield delay(delay);
  yield put(setDefaultToast());
}
