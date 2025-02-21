import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  UPDATE_COUNTRY,
  UPDATE_COUNTRY_FAILURE,
  UPDATE_COUNTRY_SUCCESS,
} from './types/countries.types';

export const fetchCountries = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => ({
  type: FETCH_COUNTRIES,
  amountElOnPage,
  currentPage,
  isOrderAsc,
  columnHeaderKey,
  filterValue,
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

export const updateCountry = (country, id) => ({
  type: UPDATE_COUNTRY,
  country,
  id,
});

export const updateCountrySuccess = (country) => ({
  type: UPDATE_COUNTRY_SUCCESS,
  country,
});

export const updateCountryFailure = (error) => ({
  type: UPDATE_COUNTRY_FAILURE,
  error,
});
