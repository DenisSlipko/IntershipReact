import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE, LOGOUT_USER } from '../actions/types/login.types';

const DefaultState = {
  token: localStorage.getItem('token'),
  values: {
    login: '',
    password: ''
  },
  error: ''
};

export const login = (state = DefaultState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, token: action.token};
    case LOGIN_USER_FAILURE:
      return { ...state, error: action.error};
    case LOGIN_USER:
      return { ...state, values: action.values};
    case LOGOUT_USER:
        return { ...state };
    case LOGOUT_USER_SUCCESS:
      return { ...state, token: null };
    case LOGOUT_USER_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const getState = (state) => state.login;

export const getLogin = (state) => ({
  value : getState(state).value,
  text : getState(state).text,
})
export const getIsLogin = (state) => getState(state).token;