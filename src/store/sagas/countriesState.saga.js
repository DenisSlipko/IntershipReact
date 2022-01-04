import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_COUNTRIES_STATE, UPDATE_COUNTRIES_STATE } from '../actions/types/countriesState.types';
import { fetchCountriesState, updateCountryState } from '../../api/countriesState.request';
import {
  fetchCountriesStateFailure,
  fetchCountriesStateSuccess,
  updateCountryStateSuccess,
  updateCountryStateFailure,
} from '../actions/countriesState.actions';
import {callFailureToast, callSuccessToast} from '../ducks/toast.duck'

export function* fetchCountriesStateSaga({ amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue }) {
  try {
    const [countriesState, totalAmount] = yield call(
      fetchCountriesState,
      amountElOnPage,
      currentPage,
      isOrderAsc,
      columnHeaderKey,
      filterValue
    );

    yield put(fetchCountriesStateSuccess(countriesState, totalAmount));
  } catch (error) {
    yield put(fetchCountriesStateFailure(error));
  }
}

export function* updateCountryStateSaga({ countryState, id }) {
  try {
    const updatedCountryState = yield call(updateCountryState, countryState, id);

    yield put(updateCountryStateSuccess(updatedCountryState));
    yield callSuccessToast('Data success updated!');
  } catch (error) {
    yield put(updateCountryStateFailure(error));
    yield callFailureToast(error);
  }
}

export default function* watchCountriesStateSaga() {
  yield takeLatest(FETCH_COUNTRIES_STATE, fetchCountriesStateSaga);
  yield takeLatest(UPDATE_COUNTRIES_STATE, updateCountryStateSaga);
}
