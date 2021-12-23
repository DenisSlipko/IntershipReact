import React from 'react';

const ModalInput = ({ label, error, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        required
        className="modal-input-flied"
        placeholder={label}
        value={value}
        onChange={(fieldName) => onChange(fieldName)}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ModalInput;
