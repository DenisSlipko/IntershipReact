import { all } from 'redux-saga/effects';
import watchCountriesSaga from './countries.saga';
import watchCountriesStateSaga from './countriesState.saga';
import watchCitiesSaga from './cities.saga';

export default function* rootSaga() {
  yield all([watchCountriesSaga(), watchCountriesStateSaga(), watchCitiesSaga()]);
}