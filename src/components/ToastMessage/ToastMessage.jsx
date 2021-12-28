import React from 'react';
import { useSelector } from 'react-redux';

import { getToast } from '../../store/reducers/toast.reducer';

const ToastMessage = () => {
  const message = useSelector(getToast);

  return (
    <div className={`info-dialog ${message.color}`}>
      <div className="info-dialog__message">{message.text}</div>
    </div>
  );
};

export default ToastMessage;
