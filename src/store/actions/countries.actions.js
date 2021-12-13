import { GET_COUNTRIES, GET_COUNTRIES_FAILURE, GET_COUNTRIES_SUCCESS, TOTAL_AMOUNT } from './types/countries.types';

export const getCountries = (countries) => ({
  type: GET_COUNTRIES,
  countries,
});

export const getTotalAmount = (total) => ({
  type: TOTAL_AMOUNT,
  total,
});

export const getCountiesSuccess = (countries) => ({
  type: GET_COUNTRIES_SUCCESS,
  countries,
});

export const getCountiesFailure = (error) => ({
  type: GET_COUNTRIES_FAILURE,
  error,
});
