import {
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES,
  CHANGE_COUNTRY,
  CHANGE_COUNTRY_SUCCESS,
  CHANGE_COUNTRY_FAILURE,
} from '../actions/types/countries.types';

const defaultState = {
  countries: [],
  totalAmount: 0,
  loading: false,
};

export const countries = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, loading: true };
    case FETCH_COUNTRIES_SUCCESS:
      return { ...state, countries: action.countries, totalAmount: action.totalAmount, loading: false };
    case FETCH_COUNTRIES_FAILURE:
      return { ...state, error: action.error, loading: false };
    case CHANGE_COUNTRY:
      return { ...state, loading: true };
    case CHANGE_COUNTRY_SUCCESS: {
      return {
        ...state,
        countries: state.countries.map((country) => {
          return country.id === action.country.id ? { ...action.country } : country;
        }),
        loading: false,
      };
    }
    case CHANGE_COUNTRY_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

const getState = (state) => state.countries;
export const getCountries = (state) => getState(state).countries;
export const getTotalAmount = (state) => getState(state).totalAmount;
