import {
  GET_DATA,
  COLUMN_HEADER,
  SORT_FLAG,
  CURRENT_PAGE,
  AMOUNT_ELEMENT,
  FILTER_VALUE,
  TOTAL_AMOUNT,
} from '../ActionTypes';

const defaultState = {
  countries: [],
  page: 1,
  amount: 20,
  total: 0,
  isAsc: localStorage.getItem('is-asc'),
  filterValue: localStorage.getItem('filter'),
  columnHeader: localStorage.getItem('data-key'),
};

export const countriesReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...state, countries: payload };
    case COLUMN_HEADER:
      return { ...state, columnHeader: payload };
    case SORT_FLAG:
      return { ...state, isAsc: payload };
    case CURRENT_PAGE:
      return { ...state, page: payload };
    case AMOUNT_ELEMENT:
      return { ...state, amount: payload };
    case FILTER_VALUE:
      return { ...state, filterValue: payload };
    case TOTAL_AMOUNT:
      return { ...state, total: payload };
    default:
      return state;
  }
};
