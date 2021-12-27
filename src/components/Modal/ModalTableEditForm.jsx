import React from 'react';
import ReactDOM from 'react-dom';

import Input from '../Input/Input';
import useForm from './useForm';

const ModalTableEditForm = ({ dataObject, columnsConfig, onClose, onUpdateData, onShowToast }) => {
  const { validate, handleFieldChange, values, errors } = useForm(dataObject);

  const rootSelector = document.getElementById('root');

  const handleUpdateData = () => {
    if (validate()) {
      onUpdateData(values, dataObject.id.value);
      onShowToast();
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-window-container">
      <button className="close-modal-btn" onClick={onClose}>
        X
      </button>
      {columnsConfig.map(({ key, label }) => (
        <Input key={key} label={label} error={errors[key]} value={values[key]} onChange={handleFieldChange(key)} />
      ))}
      <button className="change-data-btn" onClick={handleUpdateData}>
        CHANGE DATA
      </button>
    </div>,
    rootSelector
  );
};

export default ModalTableEditForm;
