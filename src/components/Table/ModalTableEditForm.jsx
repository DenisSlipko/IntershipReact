import React from 'react';
import ReactDOM from 'react-dom';

import Input from '../Input/Input';
import useForm from '../hooks/useForm';

const rootSelector = document.getElementById('root');

const ModalTableEditForm = ({ dataObject, dataId, columnsConfig, onClose, onUpdateData }) => {
  const { validate, handleFieldChange, values, errors } = useForm(dataObject);

  const handleUpdateData = () => {
    if (validate()) {
      onUpdateData(values, dataId);
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
