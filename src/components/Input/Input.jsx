import React from 'react';

const Input = ({ label, error, value, type, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-container">
      <input className="modal-input-field" placeholder={label} value={value} type={type} onChange={handleChange} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
