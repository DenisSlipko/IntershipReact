import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { countries } from './reducers/countries.reducer';
import { countriesStates } from './reducers/countriesStates.reducer';
import { cities } from './reducers/cities.reducer';
import { toast } from './reducers/toast.reducer';
import rootSaga from './sagas/root.saga';

const sagaMiddleaware = createSagaMiddleware();

const rootReducers = combineReducers({
  countries,
  countriesStates,
  cities,
  toast,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleaware)));
sagaMiddleaware.run(rootSaga);
