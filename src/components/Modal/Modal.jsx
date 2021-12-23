import React from 'react';

import ModalInput from '../Input/Input';
import useForm from './useForm';

const Modal = ({ country, onClose, columnsConfig, validationConfig, countryId, onUpdateData }) => {
  const { validate, handleChange, values, errors } = useForm(country, validationConfig);

  const handleUpdateData = () => {
    if (validate()) {
      onUpdateData(values, countryId);
    }
  };

  return (
    <div className="modal-window-container">
      <button className="close-modal-btn" onClick={onClose}>
        X
      </button>
      {columnsConfig.map(({ key, label }) => (
        <ModalInput
          key={key}
          dataKey={key}
          label={label}
          error={errors[key]}
          value={values[key]}
          onChange={handleChange(key)}
        />
      ))}
      <button className="change-data-btn" onClick={handleUpdateData}>
        CHANGE DATA
      </button>
    </div>
  );
};

export default Modal;
