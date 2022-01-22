import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';

import LoginForm from '../components/Login/LoginForm';
import { getIsLoginFailure } from '../store/reducers/authorization.reducer';

const Login = () => {
  const wrongData = useSelector(getIsLoginFailure);

  return (
    <div className="login-container">
      {wrongData 
      ? <Alert severity="error">{wrongData}</Alert> 
      : null
      }
      <LoginForm />
    </div> 
  )
};

export default Login;