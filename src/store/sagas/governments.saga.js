import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_GOVERNMENTS, UPDATE_GOVERNMENT } from '../actions/types/governments.types';
import { fetchGovernments, updateGovernment } from '../../api/governments.request';
import {
  fetchGovernmentsFailure,
  fetchGovernmentsSuccess,
  updateGovernmentSuccess,
  updateGovernmentFailure,
} from '../actions/governments.actions';
import {getFailureToast, getSuccessToast} from '../ducks/toast.duck'

export function* fetchGovernmentsSaga({ amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue }) {
  try {
    const [governments, totalAmount] = yield call(
      fetchGovernments,
      amountElOnPage,
      currentPage,
      isOrderAsc,
      columnHeaderKey,
      filterValue
    );

    yield put(fetchGovernmentsSuccess(governments, totalAmount));
  } catch (error) {
    yield put(fetchGovernmentsFailure(error));
  }
}

export function* changeGovernmentsSaga({ government, id }) {
  try {
    const updatedGovernment = yield call(updateGovernment, government, id);

    yield put(updateGovernmentSuccess(updatedGovernment));
    yield getSuccessToast('Data success updated!', 2000);
  } catch (error) {
    yield put(updateGovernmentFailure(error));
    yield getFailureToast(error, 2000);
  }
}

export default function* watchGovernmentSaga() {
  yield takeLatest(FETCH_GOVERNMENTS, fetchGovernmentsSaga);
  yield takeLatest(UPDATE_GOVERNMENT, changeGovernmentsSaga);
}
