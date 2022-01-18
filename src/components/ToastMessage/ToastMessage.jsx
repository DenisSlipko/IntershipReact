import { Alert, AlertTitle } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import { getToast } from '../../store/reducers/toast.reducer';

const ToastMessage = () => {
  const toast = useSelector(getToast);

  return toast.isShow 
  && (
    <Alert severity={`${toast.color}`} 
      sx={{ 
        position:'absolute', 
        top:50, 
        margin: 'auto', 
        left: 0, 
        right: 0, 
        width: 300 
      }}
    >
      <AlertTitle>{toast.color}</AlertTitle>
      {toast.text}
    </Alert>
  )
};

export default ToastMessage;
