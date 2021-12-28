import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { countries } from './reducers/countries.reducer';
import { toast } from './reducers/toast.reducer';
import rootSaga from './sagas/root.saga';

const sagaMiddleawre = createSagaMiddleware();

const rootReduces = combineReducers({
  countries,
  toast,
});

export const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(sagaMiddleawre)));
sagaMiddleawre.run(rootSaga);
