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
      return { ...state, color: action.color, text: action.text, isShow: action.isShow };
    case SET_DEFAULT_TOAST:
      return { defaultState }; 
    default:
      return state;
  }
};

const getState = (state) => state.toast;
const getColor = (state) => getState(state).color;
const getText = (state) => getState(state).text;
const getIsShow = (state) => getState(state).isShow;
export const getToast = ([getColor, getText, getIsShow], (toast) => {
  return toast.toast;
})