import { put, delay } from 'redux-saga/effects';
import { setSuccessToast, setFailureToast, setDefaultToast } from '../actions/toast.actions';

const defaultDelay = 2000;

export function* getSuccessToast(message, delayTime = defaultDelay) {
  yield put(setSuccessToast('success', message, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}

export function* getFailureToast(error, delayTime = defaultDelay) {
  yield put(setFailureToast('danger', error, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}
