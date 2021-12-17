import watchCountriesSaga from './countries.saga';

export default function* rootSaga() {
  yield watchCountriesSaga();
}
