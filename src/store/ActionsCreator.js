import {
  GET_DATA,
  COLUMN_HEADER,
  SORT_FLAG,
  CURRENT_PAGE,
  AMOUNT_ELEMENT,
  FILTER_VALUE,
  TOTAL_AMOUNT,
} from './ActionTypes';

export const getData = (countries) => ({
  type: GET_DATA,
  payload: countries,
});

export const setColumnHeader = (columnHeader) => ({
  type: COLUMN_HEADER,
  payload: columnHeader,
});

export const setSortFlag = (isAsc) => ({
  type: SORT_FLAG,
  payload: isAsc,
});

export const setCurrentPage = (page) => ({
  type: CURRENT_PAGE,
  payload: page,
});

export const setAmountElOnPage = (amount) => ({
  type: AMOUNT_ELEMENT,
  payload: amount,
});

export const setFilterValue = (filterValue) => ({
  type: FILTER_VALUE,
  payload: filterValue,
});

export const getTotalAmount = (total) => ({
  type: TOTAL_AMOUNT,
  payload: total,
});
