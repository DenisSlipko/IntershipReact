import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { countries } from './reducers/countries.reduсer';

const rootReduces = combineReducers({
  countries,
});

export const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(thunk)));
