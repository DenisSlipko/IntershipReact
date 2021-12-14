import { FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS } from '../actions/types/countries.types';

const defaultState = {
  countries: [],
  totalAmount: 0,
};

export const countries = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_SUCCESS:
      return { ...state, countries: action.countries, totalAmount: action.totalAmount };
    case FETCH_COUNTRIES_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const getState = (state) => state.countries;
export const getCountries = (state) => getState(state).countries;
export const getTotalAmount = (state) => getState(state).totalAmount;
