import {
  GET_COUNTRIES,
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_SUCCESS,
  TOTAL_AMOUNT,
} from '../actions/types/countries.types';

const defaultState = {
  countries: [],
  total: 0,
};

export const countries = (state = defaultState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.countries };
    case GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.countries };
    case GET_COUNTRIES_FAILURE:
      return { ...state, error: action.error };
    case TOTAL_AMOUNT:
      return { ...state, total: action.total };
    default:
      return state;
  }
};

const getData = (state) => state.countries;
export const getCountries = (state) => getData(state).countries;
export const getTotalAmount = (state) => getData(state).total;
