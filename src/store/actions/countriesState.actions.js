import {
  FETCH_COUNTRIES_STATE,
  FETCH_COUNTRIES_STATE_FAILURE,
  FETCH_COUNTRIES_STATE_SUCCESS,
  UPDATE_COUNTRIES_STATE,
  UPDATE_COUNTRIES_STATE_FAILURE,
  UPDATE_COUNTRIES_STATE_SUCCESS,
} from './types/countriesState.types';

export const fetchCountriesState = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => ({
  type: FETCH_COUNTRIES_STATE,
  amountElOnPage,
  currentPage,
  isOrderAsc,
  columnHeaderKey,
  filterValue,
});

export const fetchCountriesStateSuccess = (countriesState, totalAmount) => ({
  type: FETCH_COUNTRIES_STATE_SUCCESS,
  countriesState,
  totalAmount,
});

export const fetchCountriesStateFailure = (error) => ({
  type: FETCH_COUNTRIES_STATE_FAILURE,
  error,
});

export const updateCountryState = (countryState, id) => ({
  type: UPDATE_COUNTRIES_STATE,
  countryState,
  id,
});

export const updateCountryStateSuccess = (countryState) => ({
  type: UPDATE_COUNTRIES_STATE_SUCCESS,
  countryState,
});

export const updateCountryStateFailure = (error) => ({
  type: UPDATE_COUNTRIES_STATE_FAILURE,
  error,
});

