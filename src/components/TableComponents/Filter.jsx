import { React, useState } from 'react';
import '../style.css';

const Filter = ({ setShowFilter, dataKey, setFilterValue }) => {
  const [value, setValue] = useState('');

  const cleanField = () => {
    setValue('');
  };

  const changeInputValue = (event) => {
    localStorage.setItem('filter', event.target.value);
    setValue(event.target.value);
    setFilterValue(event.target.value);
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  return (
    <div className="filter-menu-container">
      <div className="btn-clean" onClick={cleanField}>
        x
      </div>
      <div className="filter-label">{dataKey}</div>
      <div className="filter-operator">equal</div>
      <input
        type="text"
        className="filter-value"
        placeholder="Filter value"
        value={value}
        onChange={changeInputValue}
      />
      <div className="btn-exit" onClick={closeFilter}>
        x
      </div>
    </div>
  );
};

export { Filter };
