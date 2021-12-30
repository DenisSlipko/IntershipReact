import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_CITIES, UPDATE_CITY } from '../actions/types/cities.types';
import { fetchCities, updateCity } from '../../api/cities.request';
import {
  fetchCitiesFailure,
  fetchCitiesSuccess,
  updateCitySuccess,
  updateCityFailure,
} from '../actions/cities.actions';
import {getFailureToast, getSuccessToast} from '../ducks/toast.duck'

export function* fetchCitiesSaga({ amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue }) {
  try {
    const [cities, totalAmount] = yield call(
      fetchCities,
      amountElOnPage,
      currentPage,
      isOrderAsc,
      columnHeaderKey,
      filterValue
    );

    yield put(fetchCitiesSuccess(cities, totalAmount));
  } catch (error) {
    yield put(fetchCitiesFailure(error));
  }
}

export function* changeCitiesSaga({ city, id }) {
  try {
    const updateCities = yield call(updateCity, city, id);

    yield put(updateCitySuccess(updateCities));
    yield getSuccessToast('Data success updated!', 2000);
  } catch (error) {
    yield put(updateCityFailure(error));
    yield getFailureToast(error, 2000);
  }
}

export default function* watchCitiesSaga() {
  yield takeLatest(FETCH_CITIES, fetchCitiesSaga);
  yield takeLatest(UPDATE_CITY, changeCitiesSaga);
}
