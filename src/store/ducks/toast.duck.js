import { put, delay } from 'redux-saga/effects';
import { setSuccessToast, setFailureToast, setDefaultToast } from '../actions/toast.actions';

const DEFAULT_DELAY = 2000;

export function* callSuccessToast(message, delayTime = DEFAULT_DELAY) {
  yield put(setSuccessToast('success', message, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}

export function* callFailureToast(error, delayTime = DEFAULT_DELAY) {
  yield put(setFailureToast('danger', error, true));
  yield delay(delayTime);
  yield put(setDefaultToast());
}
