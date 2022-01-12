import { React, useState, useEffect } from 'react';

const Filter = ({ filterLabel, filterValue, onClose, onChangeFilter }) => {

  const [value, setValue] = useState(filterValue);

  useEffect(() => {
    onChangeFilter(value);
  }, [value]);

  const handleCleanField = () => {
    setValue('');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    setValue(value);
  };

  return (
    <div className="filter-menu-container">
      <div className="btn-clean" onClick={handleCleanField}>
        x
      </div>
      <div className="filter-label">{filterLabel}</div>
      <div className="filter-operator">equal</div>
      <input
        type="text"
        className="filter-value"
        placeholder="Filter value"
        value={value}
        onChange={handleInputChange}
      />
      <div className="btn-exit" onClick={onClose}>
        x
      </div>
    </div>
  );
};

export default Filter;
