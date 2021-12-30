import { all } from 'redux-saga/effects';
import watchCountriesSaga from './countries.saga';
import watchGovernmentSaga from './governments.saga';
import watchCitiesSaga from './cities.saga';

export default function* rootSaga() {
  yield all([watchCountriesSaga(), watchGovernmentSaga(), watchCitiesSaga()]);
}