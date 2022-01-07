import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from './types/login.types';

export const setSuccessLogin = (token) => ({
  type: LOGIN_USER_SUCCESS,
  token
});

export const setFailureLogin = (error) => ({
  type: LOGIN_USER_FAILURE,
  error
});

export const setLogin = (values) => ({
  type: LOGIN_USER,
  values
});

export const setSuccessLogout = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const setFailureLogout = (error) => ({
  type: LOGOUT_USER_FAILURE,
  error
});

export const setLogout = () => ({
  type: LOGOUT_USER,
});

