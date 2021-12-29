import React from 'react';
import { useSelector } from 'react-redux';

import { getToastColor, getToastText, getToastIsShow } from '../../store/reducers/toast.reducer';

const ToastMessage = () => {
  const color = useSelector(getToastColor);
  const text = useSelector(getToastText);
  const isShow = useSelector(getToastIsShow);

  return isShow ? (
    <div className={`info-dialog ${color}`}>
      <div className="info-dialog__message">{text}</div>
    </div>
  ) : null;
};

export default ToastMessage;
