import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_COUNTRIES_STATES, UPDATE_COUNTRY_STATE } from '../actions/types/countriesStates.types';
import { fetchCountriesStates, updateCountryState } from '../../api/countriesStates.request';
import {
  fetchCountriesStatesFailure,
  fetchCountriesStatesSuccess,
  updateCountryStateSuccess,
  updateCountryStateFailure,
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

export function* updateCountryStateSaga({ countryStates, id }) {
  try {
    const updatedCountryStates = yield call(updateCountryState, countryStates, id);

    yield put(updateCountryStateSuccess(updatedCountryStates));
    yield callSuccessToast('Data success updated!');
  } catch (error) {
    yield put(updateCountryStateFailure(error));
    yield callFailureToast(error);
  }
}

export default function* watchCountriesStatesSaga() {
  yield takeLatest(FETCH_COUNTRIES_STATES, fetchCountriesStatesSaga);
  yield takeLatest(UPDATE_COUNTRY_STATE, updateCountryStateSaga);
}
