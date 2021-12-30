import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { countries } from './reducers/countries.reducer';
import { toast } from './reducers/toast.reducer';
import rootSaga from './sagas/root.saga';

const sagaMiddleaware = createSagaMiddleware();

const rootReducers = combineReducers({
  countries,
  toast,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleaware)));
sagaMiddleaware.run(rootSaga);
