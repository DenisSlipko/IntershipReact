import { baseRequest } from './baseRequest';

export const countriesRequest = (amountElOnPage = 20, currentPage, isOrderAsc, columnHeaderKey, filter) => {
  const like = `${columnHeaderKey}_like`;

  return baseRequest('countries', {
    params: {
      _limit: amountElOnPage,
      _page: currentPage,
      _order: isOrderAsc,
      _sort: columnHeaderKey,
      [like]: filter,
    },
  });
};
