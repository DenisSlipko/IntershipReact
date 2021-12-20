import { all } from 'redux-saga/effects';

import watchCountriesSaga from './countries.saga';
import watchCountrySaga from './change.country.saga';

export default function* rootSaga() {
  yield all([watchCountriesSaga(), watchCountrySaga()]);
}
