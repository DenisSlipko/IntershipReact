import { put, delay } from 'redux-saga/effects';
import { setSuccessToast, setFailureToast, setDefaultToast } from '../actions/toast.actions';

const defaultTime = 2000;

export function* getSuccessToast(message, delayTime = defaultTime) {
  yield put(setSuccessToast('success', message, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}

export function* getFailureToast(error, delayTime = defaultTime) {
  yield put(setFailureToast('danger', error, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}
