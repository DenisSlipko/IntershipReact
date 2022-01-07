import {
  FETCH_COUNTRIES_STATES,
  FETCH_COUNTRIES_STATES_FAILURE,
  FETCH_COUNTRIES_STATES_SUCCESS,
  UPDATE_COUNTRY_STATE,
  UPDATE_COUNTRY_STATE_FAILURE,
  UPDATE_COUNTRY_STATE_SUCCESS,
} from './types/countriesStates.types';

export const fetchCountriesStates = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => ({
  type: FETCH_COUNTRIES_STATES,
  amountElOnPage,
  currentPage,
  isOrderAsc,
  columnHeaderKey,
  filterValue,
});

export const fetchCountriesStatesSuccess = (countriesStates, totalAmount) => ({
  type: FETCH_COUNTRIES_STATES_SUCCESS,
  countriesStates,
  totalAmount,
});

export const fetchCountriesStatesFailure = (error) => ({
  type: FETCH_COUNTRIES_STATES_FAILURE,
  error,
});

export const updateCountryState = (countryStates, id) => ({
  type: UPDATE_COUNTRY_STATE,
  countryStates,
  id,
});

export const updateCountryStateSuccess = (countryStates) => ({
  type: UPDATE_COUNTRY_STATE_SUCCESS,
  countryStates,
});

export const updateCountryStateFailure = (error) => ({
  type: UPDATE_COUNTRY_STATE_FAILURE,
  error,
});

