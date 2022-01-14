import { all } from 'redux-saga/effects';
import watchCountriesSaga from './countries.saga';
import watchCountriesStatesSaga from './countriesStates.saga';
import watchCitiesSaga from './cities.saga';
import watchLoginSaga from './authorization.saga';


export default function* rootSaga() {
  yield all([
    watchCountriesSaga(), 
    watchCountriesStatesSaga(), 
    watchCitiesSaga(), 
    watchLoginSaga()]);
}
