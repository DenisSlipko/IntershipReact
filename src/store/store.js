import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { countries } from './redusers/countries.reducer';
import rootSaga from './sagas/countries.saga';

const sagaMiddleawre = createSagaMiddleware();

const rootReduces = combineReducers({
  countries,
});

export const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(sagaMiddleawre)));
sagaMiddleawre.run(rootSaga);
