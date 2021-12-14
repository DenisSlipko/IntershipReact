import { fetchCountriesSuccess, fetchCountriesFailure } from '../actions/countries.actions';
import { fetchCountries } from '../../api/countries.request';

export const fetchCountriesThunk = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filter) => {
  return async (dispatch) => {
    try {
      const response = await fetchCountries(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filter);
      const countries = response.data;
      const totalAmount = response.headers['x-total-count'];

      dispatch(fetchCountriesSuccess(countries, totalAmount));

      // localStorage.setItem('is-asc', isOrderAsc);
      // localStorage.setItem('data-key', columnHeaderKey);
      // localStorage.setItem('filter', filter);
    } catch (error) {
      console.error(error);

      dispatch(fetchCountriesFailure(error));
    }
  };
};
