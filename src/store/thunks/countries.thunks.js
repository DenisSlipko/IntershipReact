import { getCountries, getTotalAmount, getCountiesFailure } from '../actions/countries.actions';
import { countriesRequest } from '../../api/countriesRequest';

export const fetchCountries = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filter) => {
  return async (dispatch) => {
    try {
      const response = await countriesRequest(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filter);

      dispatch(getCountries(response.data));
      dispatch(getTotalAmount(response.headers['x-total-count']));

      // localStorage.setItem('is-asc', isOrderAsc);
      // localStorage.setItem('data-key', columnHeaderKey);
      // localStorage.setItem('filter', filter);
    } catch (error) {
      console.error(error);

      dispatch(getCountiesFailure(error));
    }
  };
};
