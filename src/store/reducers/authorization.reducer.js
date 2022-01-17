import { 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE, 
  LOGIN_USER, 
  LOGOUT_USER_SUCCESS, 
  LOGOUT_USER_FAILURE, 
  LOGOUT_USER 
} from '../actions/types/authorization.types';

const DefaultState = {
  token: localStorage.getItem('token'),
  error: ''
};

export const authorization = (state = DefaultState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case LOGOUT_USER:
      return state;
    case LOGIN_USER_SUCCESS:
      return { ...state, token: action.token};
    case LOGOUT_USER_SUCCESS:
      return { ...state, token: null };
    case LOGIN_USER_FAILURE:
    case LOGOUT_USER_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const getState = (state) => state.authorization;

export const getIsLogin = (state) => getState(state).token;
export const getIsLoginFailure = (state) => getState(state).error;