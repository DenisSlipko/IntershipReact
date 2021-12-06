import { baseRequest } from './coreJs';

export const getData = async (amountElOnPage, currentPage, isOrderAsc, dataKey, filter, setData, setTotalAmount) => {
  const like = `${dataKey}_like`;
  const response = await baseRequest('countries', {
    params: {
      _limit: amountElOnPage,
      _page: currentPage,
      _order: isOrderAsc,
      _sort: dataKey,
      [like]: filter,
    },
  });
  return [response.data, response.headers['x-total-count']];
};
