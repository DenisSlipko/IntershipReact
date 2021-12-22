import React from 'react';

import ModalInput from './Input';
import useForm from './useForm';

const TableModal = ({ country, onClose, columnsConfig, validationConfig, countryId, onUpdateData }) => {
  const { handleSubmit, handleChange, values, errors, isNoError } = useForm(country, validationConfig);

  const handleUpdateData = () => {
    if (isNoError) {
      onUpdateData(values, countryId);
    }
  };

  return (
    <div className="modal-window-container">
      <button className="close-modal-btn" onClick={onClose}>
        X
      </button>
      {columnsConfig.map(({ key, label, name }) => (
        <ModalInput
          key={key}
          dataKey={key}
          label={label}
          valueName={name}
          errors={errors}
          values={values}
          onChange={handleChange}
        />
      ))}
      <button className="change-data-btn" onClick={() => handleUpdateData(handleSubmit())}>
        CHANGE DATA
      </button>
    </div>
  );
};

export default TableModal;
