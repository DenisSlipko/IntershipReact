import { baseRequest } from './base.request';

export const fetchCities = async (amountElOnPage = 20, currentPage, isOrderAsc, columnHeaderKey, filter) => {
  const like = `${columnHeaderKey}_like`;
  const response = await baseRequest('cities', {
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

export const updateCity = async (country, id) => {
  const response = await baseRequest.put(`cities/${id}`, country);
  
  return response.data;
};
