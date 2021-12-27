import {
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES,
  UPDATE_COUNTRY,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_FAILURE,
  SET_ALERT,
} from '../actions/types/countries.types';

const defaultState = {
  countries: [],
  totalAmount: 0,
  loading: false,
  message: {},
};

export const countries = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, loading: true };
    case FETCH_COUNTRIES_SUCCESS:
      return { ...state, countries: action.countries, totalAmount: action.totalAmount, loading: false };
    case UPDATE_COUNTRY:
      return { ...state, loading: true };
    case UPDATE_COUNTRY_SUCCESS: {
      return {
        ...state,
        loading: false,
        countries: state.countries.map((country) => {
          return country.id === action.country.id ? { ...action.country } : country;
        }),
      };
    }
    case FETCH_COUNTRIES_FAILURE:
    case UPDATE_COUNTRY_FAILURE:
      return { ...state, error: action.error, loading: false };
    case SET_ALERT:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

const getState = (state) => state.countries;
export const getCountries = (state) => getState(state).countries;
export const getTotalAmount = (state) => getState(state).totalAmount;
export const getLoading = (state) => getState(state).loading;
export const getToast = (state) => getState(state).message;
