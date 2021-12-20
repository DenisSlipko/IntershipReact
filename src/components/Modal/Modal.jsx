import React from 'react';

import useForm from './useForm';
import validate from './validate';

const Modal = ({ country, onClose, columnsConfig, onChangeCountry }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(country, validate, onChangeCountry);

  return (
    <div className="modal-window-container">
      <button className="close-modal-btn" onClick={onClose}>
        X
      </button>
      {columnsConfig.map(({ key, label, name }) => (
        <React.Fragment key={key}>
          <input
            className="modal-input-flied"
            placeholder={label}
            name={name}
            value={values[key]}
            onChange={(event) => handleChange(key, event)}
            required
          />
          {errors[key] && <p className="error">{errors[key]}</p>}
        </React.Fragment>
      ))}
      <button className="change-data-btn" onClick={handleSubmit}>
        CHANGE DATA
      </button>
    </div>
  );
};

export default Modal;
