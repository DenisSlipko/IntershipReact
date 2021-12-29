import { put } from 'redux-saga/effects';
import { setSuccessToast, setFailureToast, setDefaultToast } from '../actions/toast.actions';

export function* getSuccessToast(delay) {
  yield put(setSuccessToast('success', 'Data success updated!', true));
  yield delay(delay);
  yield put(setDefaultToast());
}
export function* getFailureToast(delay, error) {
  yield put(setFailureToast('danger', error, true));
  yield delay(delay);
  yield put(setDefaultToast());
}
