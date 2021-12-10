import { baseRequest } from './coreJs';
import { getData, getTotalAmount } from '../store/ActionsCreator';
export const countriesData = (amountElOnPage, currentPage, isOrderAsc, columnHeader, filter) => {
  return async (dispatch) => {
    const like = `${columnHeader}_like`;
    const response = await baseRequest('countries', {
      params: {
        _limit: amountElOnPage,
        _page: currentPage,
        _order: isOrderAsc,
        _sort: columnHeader,
        [like]: filter,
      },
    });
    dispatch(getData(response.data));
    dispatch(getTotalAmount(response.headers['x-total-count']));
  };
};
