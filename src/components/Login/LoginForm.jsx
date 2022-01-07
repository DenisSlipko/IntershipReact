import React from 'react';
import { useDispatch } from 'react-redux';

import { setLogin } from '../../store/actions/login.actions';
import ModalInput from '../Input/Input';
import useForm from '../../hooks/useForm'

const LoginForm = ({dataObject}) => {
  const { validate, handleFieldChange, values, errors } = useForm(dataObject);

  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log(validate())
    if(validate()) {
      dispatch(setLogin(values));
    }
  };

  return (
    <div className="login-window-container">
      <div className="input-label">Login: </div>
      <ModalInput
        label="login"
        error={errors['login']}
        value={values['login']}
        onChange={handleFieldChange('login')}
      />
      <div className="input-label">Password: </div>
      <ModalInput
        label="password"
        error={errors['password']}
        type='password'
        value={values['password']}
        onChange={handleFieldChange('password')}
      />
      <button className="change-data-btn" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

export default LoginForm;

