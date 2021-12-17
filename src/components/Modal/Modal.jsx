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
      {columnsConfig.map((el) => (
        <React.Fragment key={el.key}>
          <input
            className="modal-input-flied"
            placeholder={el.label}
            name={el.name}
            value={values[el.key]}
            onChange={(event) => handleChange(el.key, event)}
            required
          />
          {errors[el.key] && <p className="error">{errors[el.key]}</p>}
        </React.Fragment>
      ))}
      <button className="change-data-btn" onClick={handleSubmit}>
        CHANGE DATA
      </button>
    </div>
  );
};

export default Modal;
