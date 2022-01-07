import { SET_SUCCESS_TOAST, SET_FAILURE_TOAST, SET_DEFAULT_TOAST } from '../actions/types/toast.types';

const DefaultState = {
  color: 'green',
  text: '',
  isShow: false,
};

export const toast = (state = DefaultState, action) => {
  switch (action.type) {
    case SET_SUCCESS_TOAST:
    case SET_FAILURE_TOAST:
      return { ...state, color: action.color, text: action.text, isShow: action.isShow };
    case SET_DEFAULT_TOAST:
      return DefaultState; 
    default:
      return state;
  }
};

const getState = (state) => state.toast;

export const getToast = (state) => ({
  color : getState(state).color,
  text : getState(state).text,
  isShow : getState(state).isShow
})