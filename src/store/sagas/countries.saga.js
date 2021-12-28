import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { FETCH_COUNTRIES, UPDATE_COUNTRY } from '../actions/types/countries.types';
import { fetchCountries, updateCountry } from '../../api/countries.request';
import {
  fetchCountriesFailure,
  fetchCountriesSuccess,
  changeCountrySuccess,
  changeCountryFailure,
} from '../actions/countries.actions';
import { successToast, failureToast } from '../actions/toast.actions';

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
    yield put(successToast({ color: 'success', text: 'Data success updated!' }));
    yield delay(2000);
    yield put(successToast({}));
  } catch (error) {
    yield put(changeCountryFailure(error));
    yield put(failureToast({ color: 'danger', text: error }));
    yield delay(2000);
    yield put(failureToast({}));
  }
}

export default function* watchCountriesSaga() {
  yield takeLatest(FETCH_COUNTRIES, fetchCountriesSaga);
  yield takeLatest(UPDATE_COUNTRY, updateCountriesSaga);
}
