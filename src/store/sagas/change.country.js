import { call, put, takeLatest } from 'redux-saga/effects';

import { CHANGE_COUNTRY } from '../actions/types/countries.types';
import { changeCountry } from '../../api/change.country';
import { changeCountrySuccess, changeCountryFailure } from '../actions/countries.actions';

export function* changeCountriesSaga({ country, id }) {
  try {
    const changedCountry = yield call(changeCountry, country, id);

    yield put(changeCountrySuccess(changedCountry));
  } catch (error) {
    yield put(changeCountryFailure(error));
  }
}

export default function* watchCountrySaga() {
  yield takeLatest(CHANGE_COUNTRY, changeCountriesSaga);
}
