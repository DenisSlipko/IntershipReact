import { SET_SUCCESS_TOAST, SET_FAILURE_TOAST, SET_DEFAULT_TOAST } from '../actions/types/toast.types';

const defaultState = {
  color: 'green',
  text: '',
  isShow: false,
};

export const toast = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SUCCESS_TOAST:
      return { ...state, color: action.color, text: action.text, isShow: action.isShow };
    case SET_FAILURE_TOAST:
      return { ...state, color: action.color, text: action.error, isShow: action.isShow };
    case SET_DEFAULT_TOAST:
      return { ...state, color: defaultState.color, text: defaultState.text, isShow: defaultState.isShow };
    default:
      return state;
  }
};

const getState = (state) => state.toast;
export const getToastColor = (state) => getState(state).color;
export const getToastText = (state) => getState(state).text;
export const getToastIsShow = (state) => getState(state).isShow;
