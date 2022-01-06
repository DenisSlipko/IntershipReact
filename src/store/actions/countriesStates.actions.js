import {
  FETCH_COUNTRIES_STATES,
  FETCH_COUNTRIES_STATES_FAILURE,
  FETCH_COUNTRIES_STATES_SUCCESS,
  UPDATE_COUNTRIES_STATES,
  UPDATE_COUNTRIES_STATES_FAILURE,
  UPDATE_COUNTRIES_STATES_SUCCESS,
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

export const updateCountryStates = (countryStates, id) => ({
  type: UPDATE_COUNTRIES_STATES,
  countryStates,
  id,
});

export const updateCountryStatesSuccess = (countryStates) => ({
  type: UPDATE_COUNTRIES_STATES_SUCCESS,
  countryStates,
});

export const updateCountryStatesFailure = (error) => ({
  type: UPDATE_COUNTRIES_STATES_FAILURE,
  error,
});

