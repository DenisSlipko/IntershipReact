import { FETCH_COUNTRIES, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_SUCCESS } from './types/countries.types';

export const fetchCountries = (loading) => ({
  type: FETCH_COUNTRIES,
  loading,
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
