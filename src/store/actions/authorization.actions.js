import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from './types/authorization.types';

export const loginUserSuccess = (token) => ({
  type: LOGIN_USER_SUCCESS,
  token
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  error
});

export const loginUser = (values) => ({
  type: LOGIN_USER,
  values
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  error
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

