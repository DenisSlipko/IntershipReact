import React from 'react';

import ModalInput from '../Input/Input';

const LoginForm = () => {

  const handleUpdateData = () => {
    
  };
  return (
    <div className="login-window-container">
      <div className="input-label">Enter your login: </div>
      <ModalInput
        label="login"
        error={['login']}
      />
      <div className="input-label">Enter your password: </div>
      <ModalInput
        label="password"
        error={['password']}
      />
      <button className="change-data-btn" onClick={handleUpdateData}>
        login
      </button>
    </div>
  );
};

export default LoginForm;
