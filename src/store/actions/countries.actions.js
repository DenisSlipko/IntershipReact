import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  DATA_LOADED,
} from './types/countries.types';

export const fetchCountries = (countries, totalAmount) => ({
  type: FETCH_COUNTRIES,
  countries,
  totalAmount,
});

export const fetchCountriesSuccess = (countries, totalAmount) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  countries,
  totalAmount,
});

export const fetchCountriesFailure = (error) => ({
  type: FETCH_COUNTRIES_FAILURE,
  error,
});
