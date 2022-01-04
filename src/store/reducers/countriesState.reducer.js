import {
  FETCH_COUNTRIES_STATE_FAILURE,
  FETCH_COUNTRIES_STATE_SUCCESS,
  FETCH_COUNTRIES_STATE,
  UPDATE_COUNTRIES_STATE,
  UPDATE_COUNTRIES_STATE_SUCCESS,
  UPDATE_COUNTRIES_STATE_FAILURE,
} from '../actions/types/countriesState.types';

const defaultState = {
  countriesState: [],
  totalAmount: 0,
  loading: false,
};

export const countriesState = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_STATE:
    case UPDATE_COUNTRIES_STATE:
      return { ...state, loading: true };
    case FETCH_COUNTRIES_STATE_SUCCESS:
      return { ...state, countriesState: action.countriesState, totalAmount: action.totalAmount, loading: false };
    case UPDATE_COUNTRIES_STATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        countriesState: state.countriesState.map((countryState) => {
          return countryState.id === action.countryState.id ? { ...action.countryState } : countryState;
        }),
      };
    }
    case FETCH_COUNTRIES_STATE_FAILURE:
    case UPDATE_COUNTRIES_STATE_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

const getState = (state) => state.countriesState;
export const getCountriesState = (state) => getState(state).countriesState;
export const getTotalAmount = (state) => getState(state).totalAmount;
export const getLoading = (state) => getState(state).loading;
