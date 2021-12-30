import {
  FETCH_GOVERNMENTS,
  FETCH_GOVERNMENTS_FAILURE,
  FETCH_GOVERNMENTS_SUCCESS,
  UPDATE_GOVERNMENT,
  UPDATE_GOVERNMENT_FAILURE,
  UPDATE_GOVERNMENT_SUCCESS,
} from './types/governments.types';

export const fetchGovernments = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => ({
  type: FETCH_GOVERNMENTS,
  amountElOnPage,
  currentPage,
  isOrderAsc,
  columnHeaderKey,
  filterValue,
});

export const fetchGovernmentsSuccess = (governments, totalAmount) => ({
  type: FETCH_GOVERNMENTS_SUCCESS,
  governments,
  totalAmount,
});

export const fetchGovernmentsFailure = (error) => ({
  type: FETCH_GOVERNMENTS_FAILURE,
  error,
});

export const updateGovernment = (government, id) => ({
  type: UPDATE_GOVERNMENT,
  government,
  id,
});

export const updateGovernmentSuccess = (government) => ({
  type: UPDATE_GOVERNMENT_SUCCESS,
  government,
});

export const updateGovernmentFailure = (error) => ({
  type: UPDATE_GOVERNMENT_FAILURE,
  error,
});

