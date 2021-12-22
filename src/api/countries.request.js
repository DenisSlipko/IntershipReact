import { baseRequest } from './base.request';

export const fetchCountries = async (amountElOnPage = 20, currentPage, isOrderAsc, columnHeaderKey, filter) => {
  const like = `${columnHeaderKey}_like`;
  const response = await baseRequest('countries', {
    params: {
      _limit: amountElOnPage,
      _page: currentPage,
      _order: isOrderAsc,
      _sort: columnHeaderKey,
      [like]: filter,
    },
  });

  return [response.data, response.headers['x-total-count']];
};

export const updateCountry = async (country, id) => {
  const response = await baseRequest.put(`countries/${id}`, country);
  return response.data;
};
