import axios from 'axios';

export const getData = async (amountElOnPage, currentPage, isOrderAsc, dataKey, filter, setData, setTotalAmount) => {
  const response = await axios(`http://localhost:4000/countries?`, {
    params: {
      _limit: amountElOnPage,
      _page: currentPage,
      _order: isOrderAsc,
      _sort: dataKey,
      [`${dataKey}_like`]: filter,
    },
  });
  setData(response.data);
  setTotalAmount(response.headers['x-total-count']);
};
