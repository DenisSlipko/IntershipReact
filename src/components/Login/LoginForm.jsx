import React from 'react';

import Input from '../Input/Input';

const LoginForm = () => {

  const handleUpdateData = () => {
    
  };
  return (
    <div className="login-window-container">
      <div className="input-label">Enter your login: </div>
      <Input
        label="login"
        error={['login']}
      />
      <div className="input-label">Enter your password: </div>
      <Input
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
