import {
  FETCH_CITIES,
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_SUCCESS,
  UPDATE_CITY,
  UPDATE_CITY_FAILURE,
  UPDATE_CITY_SUCCESS,
} from './types/cities.types';

export const fetchCities = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => ({
  type: FETCH_CITIES,
  amountElOnPage,
  currentPage,
  isOrderAsc,
  columnHeaderKey,
  filterValue,
});

export const fetchCitiesSuccess = (cities, totalAmount) => ({
  type: FETCH_CITIES_SUCCESS,
  cities,
  totalAmount,
});

export const fetchCitiesFailure = (error) => ({
  type: FETCH_CITIES_FAILURE,
  error,
});

export const updateCity = (city, id) => ({
  type: UPDATE_CITY,
  city,
  id,
});

export const updateCitySuccess = (city) => ({
  type: UPDATE_CITY_SUCCESS,
  city,
});

export const updateCityFailure = (error) => ({
  type: UPDATE_CITY_FAILURE,
  error,
});
