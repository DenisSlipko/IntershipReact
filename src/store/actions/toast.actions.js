import { SET_SUCCESS_TOAST, SET_FAILURE_TOAST, SET_DEFAULT_TOAST } from './types/toast.types';

export const setSuccessToast = (color, text, isShow) => ({
  type: SET_SUCCESS_TOAST,
  color,
  text,
  isShow,
});

export const setFailureToast = (color, error, isShow) => ({
  type: SET_FAILURE_TOAST,
  color,
  error,
  isShow,
});

export const setDefaultToast = (color, text, isShow) => ({
  type: SET_DEFAULT_TOAST,
  color,
  text,
  isShow,
});
