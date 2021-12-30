import {
  FETCH_GOVERNMENTS_FAILURE,
  FETCH_GOVERNMENTS_SUCCESS,
  FETCH_GOVERNMENTS,
  UPDATE_GOVERNMENT,
  UPDATE_GOVERNMENT_SUCCESS,
  UPDATE_GOVERNMENT_FAILURE,
} from '../actions/types/governments.types';

const defaultState = {
  governments: [],
  totalAmount: 0,
  loading: false,
};

export const governments = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GOVERNMENTS:
      return { ...state, loading: true };
    case FETCH_GOVERNMENTS_SUCCESS:
      return { ...state, governments: action.governments, totalAmount: action.totalAmount, loading: false };
    case UPDATE_GOVERNMENT:
      return { ...state, loading: true };
    case UPDATE_GOVERNMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        governments: state.governments.map((government) => {
          return government.id === action.government.id ? { ...action.government } : government;
        }),
      };
    }
    case FETCH_GOVERNMENTS_FAILURE:
    case UPDATE_GOVERNMENT_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

const getState = (state) => state.governments;
export const getGovernments = (state) => getState(state).governments;
export const getTotalAmount = (state) => getState(state).totalAmount;
export const getLoading = (state) => getState(state).loading;
