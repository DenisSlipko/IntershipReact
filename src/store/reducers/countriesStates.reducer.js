import {
  FETCH_COUNTRIES_STATES_FAILURE,
  FETCH_COUNTRIES_STATES_SUCCESS,
  FETCH_COUNTRIES_STATES,
  UPDATE_COUNTRIES_STATES,
  UPDATE_COUNTRIES_STATES_SUCCESS,
  UPDATE_COUNTRIES_STATES_FAILURE,
} from '../actions/types/countriesStates.types';

const defaultState = {
  countriesStates: [],
  totalAmount: 0,
  loading: false,
};

export const countriesStates = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_STATES:
    case UPDATE_COUNTRIES_STATES:
      return { ...state, loading: true };
    case FETCH_COUNTRIES_STATES_SUCCESS:
      return { ...state, countriesStates: action.countriesStates, totalAmount: action.totalAmount, loading: false };
    case UPDATE_COUNTRIES_STATES_SUCCESS: {
      return {
        ...state,
        loading: false,
        countriesStates: state.countriesStates.map((countryStates) => {
          return countryStates.id === action.countryStates.id ? { ...action.countryStates } : countryStates;
        }),
      };
    }
    case FETCH_COUNTRIES_STATES_FAILURE:
    case UPDATE_COUNTRIES_STATES_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

const getState = (state) => state.countriesStates;
export const getCountriesStates = (state) => getState(state).countriesStates;
export const getTotalAmount = (state) => getState(state).totalAmount;
export const getLoading = (state) => getState(state).loading;
