import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_COUNTRIES, UPDATE_COUNTRY } from '../actions/types/countries.types';
import { fetchCountries, updateCountry } from '../../api/countries.request';
import {
  fetchCountriesFailure,
  fetchCountriesSuccess,
  changeCountrySuccess,
  changeCountryFailure,
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

export function* changeCountriesSaga({ country, id }) {
  try {
    const changedCountry = yield call(updateCountry, country, id);

    yield put(changeCountrySuccess(changedCountry));
  } catch (error) {
    yield put(changeCountryFailure(error));
  }
}

export default function* watchCountriesSaga() {
  yield takeLatest(FETCH_COUNTRIES, fetchCountriesSaga);
  yield takeLatest(UPDATE_COUNTRY, changeCountriesSaga);
}
