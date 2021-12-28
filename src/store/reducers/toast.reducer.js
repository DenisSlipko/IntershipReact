import { SUCCESS_TOAST, FAILURE_TOAST } from '../actions/types/toast.types';

const defaultState = {
  feedback: {},
};

export const toast = (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_TOAST:
      return { ...state, feedback: action.feedback };
    case FAILURE_TOAST:
      return { ...state, feedback: action.error };
    default:
      return state;
  }
};

const getState = (state) => state.toast;
export const getToast = (state) => getState(state).feedback;
