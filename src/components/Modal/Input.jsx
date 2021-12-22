import React from 'react';

const ModalInput = ({ dataKey, label, valueName, errors, values, onChange }) => {
  return (
    <div className="input-container" key={dataKey}>
      <input
        className="modal-input-flied"
        placeholder={label}
        name={valueName}
        value={values[dataKey]}
        onChange={(event) => onChange(dataKey, event)}
        required
      />
      {errors[dataKey] && <p className="error">{errors[dataKey]}</p>}
    </div>
  );
};

export default ModalInput;
