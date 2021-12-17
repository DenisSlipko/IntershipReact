import { call, put, takeLatest } from 'redux-saga/effects';

import { CHANGE_COUNTRY } from '../actions/types/countries.types';
import { changeCountries } from '../../api/change.country';
import { changeCountrySuccess, changeCountryFailure } from '../actions/countries.actions';

export function* changeCountriesSaga({ country, id }) {
  try {
    const changedCountry = yield call(changeCountries, country, id);
    yield put(changeCountrySuccess(changedCountry[0]));
  } catch (error) {
    yield put(changeCountryFailure(error));
  }
}

export default function* watchCountrySaga() {
  yield takeLatest(CHANGE_COUNTRY, changeCountriesSaga);
}
