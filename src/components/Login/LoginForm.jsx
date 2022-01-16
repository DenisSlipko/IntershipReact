import React from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../store/actions/authorization.actions';
import useForm from '../../hooks/useForm'
import { maxValue, minValue, required } from '../../hooks/useForm'
import { Box, Button, TextField, Typography } from '@mui/material';

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
      <Box sx={{ 
        width: 300, 
        height: 300 , 
        mt: 10, 
        display:'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        textAlign: 'center'
        }}>
        <Typography>
          LOG IN
        </Typography>
        <TextField 
          id="outlined-basic" 
          label="login" 
          variant="outlined" 
          helperText={errors['login']}
          error={errors['login'] ? true : false}
          value={values['login']}
          onChange={handleFieldChange('login')}
        />
        <TextField 
          id="outlined-basic" 
          label="password" 
          variant="outlined" 
          type="password"
          helperText={errors['password']}
          error={errors['password'] ? true : false}
          value={values['password']}
          onChange={handleFieldChange('password')}
        />
        <Button onClick={handleLogin}>login</Button>
      </Box>
    </>
  );
};

export default LoginForm;

