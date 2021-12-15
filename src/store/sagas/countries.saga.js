import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_COUNTRIES } from '../actions/types/countries.types';
import { fetchCountries } from '../../api/countries.request';
import { fetchCountriesFailure, fetchCountriesSuccess } from '../actions/countries.actions';

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
export function* watchFetchCountriesSaga() {
  yield takeLatest(FETCH_COUNTRIES, fetchCountriesSaga);
}

export default function* rootSaga() {
  yield watchFetchCountriesSaga();
}
