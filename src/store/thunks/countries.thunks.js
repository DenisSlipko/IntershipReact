import { fetchCountriesSuccess, fetchCountiesFailure } from '../actions/countries.actions';
import { countriesRequest } from '../../api/countries.request';

export const fetchCountries = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filter) => {
  return async (dispatch) => {
    try {
      const response = await countriesRequest(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filter);

      dispatch(fetchCountriesSuccess(response.data, response.headers['x-total-count']));

      // localStorage.setItem('is-asc', isOrderAsc);
      // localStorage.setItem('data-key', columnHeaderKey);
      // localStorage.setItem('filter', filter);
    } catch (error) {
      console.error(error);

      dispatch(fetchCountiesFailure(error));
    }
  };
};
