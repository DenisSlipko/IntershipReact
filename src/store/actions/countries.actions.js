import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
  CHANGE_COUNTRY,
  CHANGE_COUNTRY_FAILURE,
  CHANGE_COUNTRY_SUCCESS,
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

export const changeCountry = (country, id) => ({
  type: CHANGE_COUNTRY,
  country,
  id,
});

export const changeCountrySuccess = (country) => ({
  type: CHANGE_COUNTRY_SUCCESS,
  country,
});

export const changeCountryFailure = (error) => ({
  type: CHANGE_COUNTRY_FAILURE,
  error,
});
