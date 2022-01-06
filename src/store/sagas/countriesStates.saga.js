import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_COUNTRIES_STATES, UPDATE_COUNTRIES_STATES } from '../actions/types/countriesStates.types';
import { fetchCountriesStates, updateCountryStates } from '../../api/countriesStates.request';
import {
  fetchCountriesStatesFailure,
  fetchCountriesStatesSuccess,
  updateCountryStatesSuccess,
  updateCountryStatesFailure,
} from '../actions/countriesStates.actions';
import { callFailureToast, callSuccessToast } from '../ducks/toast.duck'

export function* fetchCountriesStatesSaga({ amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue }) {
  try {
    const [countriesStates, totalAmount] = yield call(
      fetchCountriesStates,
      amountElOnPage,
      currentPage,
      isOrderAsc,
      columnHeaderKey,
      filterValue
    );

    yield put(fetchCountriesStatesSuccess(countriesStates, totalAmount));
  } catch (error) {
    yield put(fetchCountriesStatesFailure(error));
  }
}

export function* updateCountryStatesSaga({ countryStates, id }) {
  try {
    const updatedCountryStates = yield call(updateCountryStates, countryStates, id);

    yield put(updateCountryStatesSuccess(updatedCountryStates));
    yield callSuccessToast('Data success updated!');
  } catch (error) {
    yield put(updateCountryStatesFailure(error));
    yield callFailureToast(error);
  }
}

export default function* watchCountriesStatesSaga() {
  yield takeLatest(FETCH_COUNTRIES_STATES, fetchCountriesStatesSaga);
  yield takeLatest(UPDATE_COUNTRIES_STATES, updateCountryStatesSaga);
}
