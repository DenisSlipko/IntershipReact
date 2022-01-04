import {
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES,
  UPDATE_CITY,
  UPDATE_CITY_SUCCESS,
  UPDATE_CITY_FAILURE
} from '../actions/types/cities.types';

const defaultState = {
  cities: [],
  totalAmount: 0,
  loading: false,
};

export const cities = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
    case UPDATE_CITY:
      return { ...state, loading: true };
    case FETCH_CITIES_SUCCESS:
      return { ...state, cities: action.cities, totalAmount: action.totalAmount, loading: false };
    case UPDATE_CITY_SUCCESS: {
      return {
        ...state,
        loading: false,
        cities: state.cities.map((city) => {
          return city.id === action.city.id ? { ...action.city } : city;
        }),
      };
    }
    case FETCH_CITIES_FAILURE:
    case UPDATE_CITY_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

const getState = (state) => state.cities;
export const getCities = (state) => getState(state).cities;
export const getTotalAmount = (state) => getState(state).totalAmount;
export const getLoading = (state) => getState(state).loading;
