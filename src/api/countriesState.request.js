import { baseRequest } from './base.request';

export const fetchCountriesState = async (amountElOnPage = 20, currentPage, isOrderAsc, columnHeaderKey, filter) => {
  const like = `${columnHeaderKey}_like`;
  const response = await baseRequest('states', {
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

export const updateCountryState = async (countryState, id) => {
  const response = await baseRequest.put(`states/${id}`, countryState);
  
  return response.data;
};
