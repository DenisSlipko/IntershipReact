import { useDispatch } from 'react-redux';

import LoginForm from '../components/Login/LoginForm';
import { maxValue, minValue, required } from '../hooks/useForm';
import { setLogout } from '../store/actions/login.actions';

const Login = ({ isLogin }) => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  }

  const loginObject = {
    login: {
      value: '',
      validators: [maxValue(16), minValue(2), required('Field required!')],
    },
    password: {
      value: '',
      validators: [maxValue(16), minValue(2), required('Field required!')],
    },
  };

  return (
    isLogin ? (<><div className='auth-success'>You are success authorizated!</div>
    <button className="logout-btn" onClick={handleLogout} >logout</button></>
    )
    : 
    (<div className="login-container">
      <LoginForm dataObject={loginObject}/>
    </div>) 
  );
};

export default Login;
