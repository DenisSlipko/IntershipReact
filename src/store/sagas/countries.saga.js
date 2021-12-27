import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_COUNTRIES, UPDATE_COUNTRY } from '../actions/types/countries.types';
import { fetchCountries, updateCountry } from '../../api/countries.request';
import {
  fetchCountriesFailure,
  fetchCountriesSuccess,
  changeCountrySuccess,
  changeCountryFailure,
  setToast,
} from '../actions/countries.actions';

export function* fetchCountriesSaga({ amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue }) {
  try {
    const [countries, totalAmount] = yield call(
      fetchCountries,
      amountElOnPage,
      currentPage,
      isOrderAsc,
      columnHeaderKey,
      filterValue
    );

    yield put(fetchCountriesSuccess(countries, totalAmount));
  } catch (error) {
    yield put(fetchCountriesFailure(error));
  }
}

export function* updateCountriesSaga({ country, id }) {
  try {
    const updatedCountry = yield call(updateCountry, country, id);

    yield put(changeCountrySuccess(updatedCountry));
    yield put(setToast({ text: 'Data success updated!', color: 'success' }));
  } catch (error) {
    yield put(changeCountryFailure(error));
    yield put(setToast({ text: error, color: 'danger' }));
  }
}

export default function* watchCountriesSaga() {
  yield takeLatest(FETCH_COUNTRIES, fetchCountriesSaga);
  yield takeLatest(UPDATE_COUNTRY, updateCountriesSaga);
}
