import { baseRequest } from './base.request';

export const fetchCountriesStates = async (amountElOnPage = 20, currentPage, isOrderAsc, columnHeaderKey, filter) => {
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

export const updateCountryStates = async (countryStates, id) => {
  const response = await baseRequest.put(`states/${id}`, countryStates);
  
  return response.data;
};
