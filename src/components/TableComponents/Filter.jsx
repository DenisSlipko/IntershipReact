import { React, useState } from 'react';
import '../style.css';

const Filter = ({ onCloseFilter, filterLabel, onFilterChange }) => {
  const [value, setValue] = useState('');

  const handleCleanField = () => {
    setValue('');
  };

  const handleInputChange = (event) => {
    localStorage.setItem('filter', event.target.value);
    setValue(event.target.value);
    onFilterChange(event);
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
      <div className="btn-exit" onClick={onCloseFilter}>
        x
      </div>
    </div>
  );
};

export default Filter;
