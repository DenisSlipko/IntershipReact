import { all } from 'redux-saga/effects';
import watchCountriesSaga from './countries.saga';
import watchCountriesStatesSaga from './countriesStates.saga';
import watchCitiesSaga from './cities.saga';
import watchLoginSaga from './login.saga';
import watchLogoutSaga from './logout.saga';


export default function* rootSaga() {
  yield all([watchCountriesSaga(), watchCountriesStatesSaga(), watchCitiesSaga(), watchLoginSaga(), watchLogoutSaga()]);
}