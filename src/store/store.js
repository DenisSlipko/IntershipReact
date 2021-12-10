import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { countriesReducer } from './redusers/countriesReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReduces = combineReducers({
  reduxState: countriesReducer,
});

export const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(thunk)));
