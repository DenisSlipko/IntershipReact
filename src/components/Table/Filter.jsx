import { React, useState } from 'react';

const Filter = ({ filterLabel, filterValue, onChangeFilter, onCloseFilter }) => {
  const [value, setValue] = useState(filterValue);

  const handleCleanField = () => {
    setValue('');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    localStorage.setItem('filter', value);
    setValue(value);
    onChangeFilter(value);
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
