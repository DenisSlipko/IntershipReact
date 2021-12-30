import React from 'react';
import { useSelector } from 'react-redux';

import { getToast } from '../../store/reducers/toast.reducer';

const ToastMessage = () => {
  const toast = useSelector(getToast);

  return toast.isShow ? (
    <div className={`info-dialog ${toast.color}`}>
      <div className="info-dialog__message">{toast.text}</div>
    </div>
  ) : null;
};

export default ToastMessage;
