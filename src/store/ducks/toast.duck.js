import { put, delay } from 'redux-saga/effects';
import { setSuccessToast, setFailureToast, setDefaultToast } from '../actions/toast.actions';

const DefaultDelay = 2000;

export function* getSuccessToast(message, delayTime = DefaultDelay) {
  yield put(setSuccessToast('success', message, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}

export function* getFailureToast(error, delayTime = DefaultDelay) {
  yield put(setFailureToast('danger', error, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}
