import React from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/actions/authorization.actions';
import Input from '../Input/Input';
import useForm, { required } from '../../hooks/useForm';

const loginObject = {
  login: {
    value: '',
    validators: [required('Field login is required!')],
  },
  password: {
    value: '',
    validators: [required('Field password is required!')],
  },
};

const LoginForm = () => {
  const { validate, handleFieldChange, values, errors } = useForm(loginObject);

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (validate()) {
      dispatch(loginUser(values));
    }
  };

  return (
    <div className="login-window-container">
      <div className="input-label">Login: </div>
      <Input
        label="login"
        error={errors['login']}
        value={values['login']}
        onChange={handleFieldChange('login')}
      />
      <div className="input-label">Password: </div>
      <Input
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

