import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../store/actions/authorization.actions';
import { getIsLogin } from '../store/reducers/authorization.reducer';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(getIsLogin)

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    isLogin 
      ? (
        <>
          <div className='auth-success'>You are success authorizated!</div>
          <button className="logout-btn" onClick={handleLogout} >logout</button>
        </>
      )
      : (
        <div className="login-container">
          <LoginForm />
        </div>
      ) 
  )
};

export default Login;
