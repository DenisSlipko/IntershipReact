import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';

import { loginUser } from '../../store/actions/authorization.actions';
import useForm, { maxValue, minValue, required } from '../../hooks/useForm'

const loginObject = {
  login: {
    value: '',
    validators: [maxValue(16), minValue(2), required('Login field is required!')], 
  },
  password: {
    value: '',
    validators: [maxValue(16), minValue(2), required('Password field is required!')], 
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
    <>
      <Box 
        sx={{ 
        width: 300, 
        height: 300 , 
        m: 'auto',
        mt: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        textAlign: 'center'
        }}
      >
        <Typography>
          LOG IN
        </Typography>
        <TextField 
          id="outlined-basic" 
          label="login" 
          variant="outlined" 
          helperText={errors['login']}
          error={Boolean(errors['login'])}
          value={values['login']}
          onChange={handleFieldChange('login')}
        />
        <TextField 
          id="outlined-basic" 
          label="password" 
          variant="outlined" 
          type="password"
          helperText={errors['password']}
          error={Boolean(errors['password'])}
          value={values['password']}
          onChange={handleFieldChange('password')}
        />
        <Button onClick={handleLogin} variant="contained" >login</Button>
      </Box>
    </>
  );
};

export default LoginForm;

